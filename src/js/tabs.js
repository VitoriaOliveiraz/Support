import { $, $$, save, load } from './utils.js';
export function activateTab(id){
  const sections = $$('.section');
  const buttons  = $$('.nav-button');
  sections.forEach(s => s.classList.toggle('active', s.id === id));
  buttons.forEach(b => {
    const on = b.dataset.section === id;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', String(on));
  });
  save('lastTab', id);
}
export function initTabs(){
  const buttons = $$('.nav-button');
  buttons.forEach(b => b.addEventListener('click', () => activateTab(b.dataset.section)));
  document.addEventListener('keydown', (e)=>{
    if (!['ArrowLeft','ArrowRight'].includes(e.key)) return;
    const idx = buttons.findIndex(b => b.classList.contains('active'));
    const next = e.key==='ArrowRight' ? (idx+1)%buttons.length : (idx-1+buttons.length)%buttons.length;
    buttons[next].focus(); buttons[next].click();
  });
  activateTab(load('lastTab', 'arrays'));
}
