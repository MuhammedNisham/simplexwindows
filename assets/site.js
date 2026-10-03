'use strict';
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation.addEventListener('click', event => { if (event.target.closest('a, button')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const dialog = document.querySelector('#enquiry');
const form = document.querySelector('#enquiry-form');
const status = document.querySelector('#form-status');
let returnFocus;
document.querySelectorAll('[data-enquire]').forEach(button => button.addEventListener('click', () => {
  returnFocus = button;
  if (!form.querySelector('[type="submit"]').disabled) { form.reset(); status.textContent = ''; }
  document.querySelector('#interested-product').value = button.dataset.enquire;
  dialog.showModal(); document.body.classList.add('modal-open');
}));
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); returnFocus?.focus(); });
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const button = form.querySelector('[type="submit"]');
  button.disabled = true; button.textContent = 'Sending your enquiry…'; status.textContent = '';
  const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch('https://formsubmit.co/ajax/simplexwindows14@gmail.com', { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }, signal: controller.signal });
    const result = await response.json();
    if (!response.ok || ![true, 'true'].includes(result.success)) throw new Error('Enquiry was not accepted');
    status.textContent = 'Thank you. Your callback request has been submitted. You can also reach us at simplexwindows14@gmail.com.';
    form.reset();
  } catch (_) { status.textContent = 'We could not confirm your enquiry was sent. Please try again, email simplexwindows14@gmail.com, or call +91 75108 00577.'; }
  finally { clearTimeout(timeout); button.disabled = false; button.textContent = 'Request a callback ↗'; }
});
const productSearch = document.querySelector('#product-search');
if (productSearch) {
  const cards = [...document.querySelectorAll('.product-card')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  let category = new URLSearchParams(location.search).get('category') || 'All designs';
  if (!filters.some(button => button.dataset.filter === category)) category = 'All designs';
  const update = () => {
    let count = 0; const term = productSearch.value.toLowerCase().trim();
    cards.forEach(card => { const visible = (category === 'All designs' || card.dataset.category === category) && (card.dataset.search + ' ' + card.dataset.category.toLowerCase()).includes(term); card.hidden = !visible; if (visible) count++; });
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
    document.querySelector('#product-count').textContent = `${count} ${count === 1 ? 'design' : 'designs'} to explore`;
    document.querySelector('#empty-products').hidden = count !== 0;
  };
  filters.forEach(button => button.addEventListener('click', () => { category = button.dataset.filter; const url = new URL(location.href); if (category === 'All designs') url.searchParams.delete('category'); else url.searchParams.set('category', category); history.replaceState(null, '', url); update(); }));
  productSearch.addEventListener('input', update);
  document.querySelector('#reset-filters').addEventListener('click', () => { productSearch.value = ''; filters[0].click(); productSearch.focus(); });
  update();
}

// A keyboard-accessible image viewer. Collection links retain their navigation.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const viewer = document.createElement('dialog');
viewer.className = 'image-viewer';
viewer.setAttribute('aria-label', 'Image preview');
viewer.innerHTML = '<button class="viewer-close" aria-label="Close image preview">×</button><figure><img alt=""><figcaption></figcaption></figure>';
document.body.append(viewer);
let imageTrigger;
let closingImage = false;
function closeImage() {
  if (closingImage) return;
  closingImage = true;
  viewer.classList.add('is-closing');
  setTimeout(() => { viewer.close(); viewer.classList.remove('is-closing'); closingImage = false; }, reducedMotion.matches ? 0 : 180);
}
document.querySelectorAll('main img').forEach(img => {
  if (img.closest('a, button')) return;
  const trigger = document.createElement('button');
  trigger.type = 'button'; trigger.className = 'image-zoom';
  trigger.setAttribute('aria-label', `View larger: ${img.alt}`);
  img.replaceWith(trigger); trigger.append(img);
  trigger.addEventListener('click', () => {
    imageTrigger = trigger;
    const preview = viewer.querySelector('img');
    preview.src = img.currentSrc || img.src; preview.alt = img.alt;
    viewer.querySelector('figcaption').textContent = img.alt;
    viewer.showModal(); document.body.classList.add('modal-open');
  });
});
viewer.querySelector('.viewer-close').addEventListener('click', closeImage);
viewer.addEventListener('cancel', event => { event.preventDefault(); closeImage(); });
viewer.addEventListener('click', event => { if (event.target === viewer) closeImage(); });
viewer.addEventListener('close', () => { if (!dialog.open) document.body.classList.remove('modal-open'); imageTrigger?.focus({preventScroll:true}); });

// Reveal once as content enters the viewport; keep reduced-motion browsing static.
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll('.section-heading, .collection-card, .story-grid, .detail-grid, .ambassador, .location-section, .catalogue-section').forEach(el => {
    el.classList.add('reveal-ready'); observer.observe(el);
  });
}
const dealerSearch = document.querySelector('#dealer-search');
if (dealerSearch) {
  const cards = [...document.querySelectorAll('.dealer-card')];
  const update = () => { let count = 0; const term = dealerSearch.value.toLowerCase().trim(); cards.forEach(card => { card.hidden = !card.dataset.search.includes(term); if (!card.hidden) count++; }); document.querySelector('#dealer-count').textContent = `${count} ${count === 1 ? 'dealer' : 'dealers'} found`; document.querySelector('#empty-dealers').hidden = count !== 0; };
  dealerSearch.addEventListener('input', update); update();
}
