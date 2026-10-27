"use strict";
(() => {
 const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
 const localPreview = ['localhost','127.0.0.1','::1'].includes(location.hostname) && new URLSearchParams(location.search).get('review-preview') === '1';
 document.querySelectorAll('[data-review-preview]').forEach(section => { section.hidden = !localPreview; });
 document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const pause = carousel.querySelector('[data-pause]');
  let paused = reduce.matches, hovered = false, focused = false, visible = false, timer;
  const motion = () => reduce.matches ? 'auto' : 'smooth';
  const advance = direction => {
   const step = track.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || '0');
   const end = track.scrollWidth - track.clientWidth;
   let left = track.scrollLeft + direction * step;
   if (direction > 0 && left > end + 3) left = 0;
   else if (direction < 0 && left < -3) left = end;
   track.scrollTo({left, behavior:motion()});
  };
  carousel.querySelector('[data-next]').addEventListener('click',() => advance(1));
  carousel.querySelector('[data-previous]').addEventListener('click',() => advance(-1));
  track.addEventListener('keydown',event => { if (event.target !== track) return; if (['ArrowLeft','ArrowRight'].includes(event.key)) { event.preventDefault(); advance(event.key === 'ArrowRight' ? 1 : -1); } });
  if (!pause) return;
  const label = () => { pause.textContent = paused ? 'Start sliding' : 'Pause sliding'; pause.setAttribute('aria-pressed',String(paused)); };
  const sync = () => { clearInterval(timer); if (!paused && !hovered && !focused && visible && !document.hidden && !reduce.matches) timer = setInterval(() => advance(1),7000); };
  pause.addEventListener('click',() => { paused = !paused; label(); sync(); });
  carousel.addEventListener('mouseenter',() => {hovered=true;sync();});
  carousel.addEventListener('mouseleave',() => {hovered=false;sync();});
  carousel.addEventListener('focusin',() => {focused=true;sync();});
  carousel.addEventListener('focusout',() => {setTimeout(() => {focused=carousel.contains(document.activeElement);sync();},0);});
  track.addEventListener('pointerdown',() => {paused=true;label();sync();},{passive:true});
  document.addEventListener('visibilitychange',sync);
  reduce.addEventListener('change',() => {paused=reduce.matches;label();sync();});
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => {visible=entries[0].isIntersecting;sync();},{threshold:.2}).observe(carousel);
  label();
 });
})();
