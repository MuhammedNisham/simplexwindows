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
    const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(form), signal: controller.signal });
    const result = await response.json();
    if (!response.ok || !result.success) throw new Error('Enquiry was not accepted');
    status.textContent = 'Thank you. Your enquiry has been received. The Simplex team will contact you.';
    form.reset();
  } catch (_) { status.textContent = 'We could not confirm your enquiry was sent. Please try again, or call +91 75108 00577.'; }
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
const dealerSearch = document.querySelector('#dealer-search');
if (dealerSearch) {
  const cards = [...document.querySelectorAll('.dealer-card')];
  const update = () => { let count = 0; const term = dealerSearch.value.toLowerCase().trim(); cards.forEach(card => { card.hidden = !card.dataset.search.includes(term); if (!card.hidden) count++; }); document.querySelector('#dealer-count').textContent = `${count} ${count === 1 ? 'dealer' : 'dealers'} found`; document.querySelector('#empty-dealers').hidden = count !== 0; };
  dealerSearch.addEventListener('input', update); update();
}
