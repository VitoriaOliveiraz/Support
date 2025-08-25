export const $  = (sel, el = document) => el.querySelector(sel);
export const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
export function smoothScrollTop(){ window.scrollTo({ top:0, behavior:"smooth" }); }
export function save(key, val){ localStorage.setItem(key, JSON.stringify(val)); }
export function load(key, fallback){ try{ return JSON.parse(localStorage.getItem(key)) ?? fallback; }catch{ return fallback; } }
export const debounce = (fn, ms=300) => { let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a),ms); } };
export const throttle = (fn,ms=200)=>{ let p=0; return (...a)=>{ const n=Date.now(); if(n-p>ms){ p=n; fn(...a); } } };
