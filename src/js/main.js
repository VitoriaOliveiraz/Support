import { initTabs } from "./tabs.js";
import { initSearch } from "./search.js";
import { initUI } from "./ui.js";
import { initQuickAdd } from "./modal.js";
import { renderMegaPack } from "./render.js";
document.addEventListener("keyup", (e) => {
  if (e.key.toLowerCase() === "/") {
    const input = document.querySelector("#globalSearch");
    input?.focus();
    e.preventDefault();
  }
});
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initSearch();
  initUI();
  initQuickAdd();
  renderMegaPack();
});
