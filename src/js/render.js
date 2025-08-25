import { $ } from "./utils.js";
import { MEGA_PACK } from "../data/methods.js";
import { CHALLENGES } from "../data/challenges.js";
import { addMethod } from "./modal.js";
export function renderMegaPack() {
  MEGA_PACK.forEach(addMethod);
  const list = $("#challengeList");
  if (list) {
    CHALLENGES.forEach((ch) => {
      const card = document.createElement("article");
      card.className = "challenge-card";
      card.dataset.tags = ch.tags;
      const levelClass =
        ch.level === "ez"
          ? "badge-ez"
          : ch.level === "md"
          ? "badge-md"
          : "badge-hd";
      card.innerHTML = `
        <div class="challenge-head">
          <div class="challenge-title">${ch.title}</div>
          <div class="badges">
            <span class="badge ${levelClass}"> ${ch.level.toUpperCase()} </span>
            ${ch.tags
              .split(" ")
              .map((t) => `<span class="badge badge-topic">${t}</span>`)
              .join("")}
          </div>
        </div>
        <div class="challenge-body">
          <p>${ch.body}</p>
          <details class="code-block" open>
            <summary class="code-header"><span class="code-language">Starter</span></summary>
            <pre><code>${ch.starter}</code></pre>
          </details>
          <details class="code-block">
            <summary class="code-header"><span class="code-language">Solução</span></summary>
            <pre><code>${ch.solution}</code></pre>
          </details>
        </div>
      `.trim();
      list.appendChild(card);
    });
  }
}
