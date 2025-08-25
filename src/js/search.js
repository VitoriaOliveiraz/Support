import { $, $$ } from './utils.js';
function highlight(text, q){
  if (!q) return text;
  const rx = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi");
  return text.replace(rx, '<mark class="highlight">$1</mark>');
}
function filterGuide(q){
  const norm = q.trim().toLowerCase();
  $$('.method-item, .challenge-card').forEach(card=>{
    const tags = (card.dataset.tags||'').toLowerCase();
    const name = (card.querySelector('.method-name,.challenge-title')?.textContent||'').toLowerCase();
    const desc = (card.querySelector('.method-description,.challenge-body')?.textContent||'').toLowerCase();
    const code = (card.querySelector('pre')?.textContent||'').toLowerCase();
    const ok = !norm || [tags,name,desc,code].some(t => t.includes(norm));
    card.style.display = ok ? '' : 'none';
    const nameEl = card.querySelector('.method-name,.challenge-title');
    const descEl = card.querySelector('.method-description,.challenge-body p');
    nameEl && (nameEl.innerHTML = highlight(nameEl.textContent, norm));
    descEl && (descEl.innerHTML = highlight(descEl.textContent, norm));
  });
}
export function initSearch(){
  const input = $('#globalSearch');
  const clearBtn = $('#btnClearSearch');
  const expandAllBtn = $('#btnExpandAll');
  const collapseAllBtn = $('#btnCollapseAll');
  input?.addEventListener('input', e => filterGuide(e.target.value));
  clearBtn?.addEventListener('click', ()=>{ input.value=''; filterGuide(''); input.focus(); });
  function setAllDetails(open){ $$('.section.active details.code-block').forEach(d => { d.open = open; }); }
  expandAllBtn?.addEventListener('click', ()=> setAllDetails(true));
  collapseAllBtn?.addEventListener('click', ()=> setAllDetails(false));
}
