import { $, $$, smoothScrollTop, load, save } from './utils.js';
export function initUI(){
  const topBtn = $('.back-to-top');
  const fill = $('.progress-fill');
  topBtn?.addEventListener('click', smoothScrollTop);
  function onScroll(){
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
    fill.style.width = `${Math.min(100, Math.max(0, scrolled*100))}%`;
  }
  document.addEventListener('scroll', onScroll);
  onScroll();
  const btnTheme = $('#btnToggleTheme');
  btnTheme?.addEventListener('click', ()=>{
    const cur = load('theme','dark');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.style.colorScheme = next;
    save('theme', next);
  });
  document.documentElement.style.colorScheme = load('theme','dark');
  $$('.copy-button').forEach(btn=>{
    btn.addEventListener('click', async ()=> {
      const targetSel = btn.dataset.copyTarget;
      const el = document.querySelector(targetSel);
      if (!el) return;
      await navigator.clipboard.writeText(el.textContent);
      const txt = btn.querySelector('.copy-text');
      const old = txt.textContent;
      txt.textContent = 'Copiado!';
      setTimeout(()=> txt.textContent = old, 1200);
    });
  });
}
