import { $ } from "./utils.js";
export function addMethod({ section, name, badge, desc, tags, code }) {
  const host = document.getElementById(section);
  if (!host) return;
  const article = document.createElement("article");
  article.className = "method-item";
  article.dataset.tags = tags;
  const codeId = `code-${Math.random().toString(36).slice(2, 8)}`;
  article.innerHTML = `
    <div class="method-header">
      <div class="method-name">${name}</div>
      <div class="method-badge">${badge}</div>
    </div>
    <p class="method-description">${desc}</p>
    <details class="code-block" open>
      <summary class="code-header">
        <span class="code-language">JavaScript</span>
        <button class="copy-button" data-copy-target="#${codeId}">
          <span class="copy-icon">📋</span><span class="copy-text">Copiar</span>
        </button>
      </summary>
      <pre><code id="${codeId}">${code}</code></pre>
    </details>
  `.trim();
  const btn = article.querySelector(".copy-button");
  btn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(code);
    const t = article.querySelector(".copy-text");
    const o = t.textContent;
    t.textContent = "Copiado!";
    setTimeout(() => (t.textContent = o), 1200);
  });
  host.appendChild(article);
}
export function initQuickAdd() {
  const modal = $("#quickAddModal");
  const openFab = $("#quickAddButton");
  const form = $("#quickAddForm");
  const qa = {
    section: $("#qaSection"),
    name: $("#qaName"),
    badge: $("#qaBadge"),
    desc: $("#qaDesc"),
    tags: $("#qaTags"),
    code: $("#qaCode"),
  };
  openFab?.addEventListener("click", () => modal.showModal());
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    addMethod({
      section: qa.section.value,
      name: qa.name.value || ".novoMetodo()",
      badge: qa.badge.value || "Custom",
      desc: qa.desc.value || "Descrição do método.",
      tags: qa.tags.value || "",
      code: qa.code.value || "// exemplo aqui",
    });
    form.reset();
    modal.close();
  });
}
