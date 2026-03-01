async function includeHTML(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  const res = await fetch(url, { cache: "no-store" });
  el.innerHTML = await res.text();
}

document.addEventListener("DOMContentLoaded", async () => {
  // Works from root pages and from /communities/* pages
  const isCommunityPage = window.location.pathname.includes("/communities/");
  const base = isCommunityPage ? ".." : ".";

  await includeHTML("#site-nav", `${base}/partials/nav.html`);
  await includeHTML("#site-footer", `${base}/partials/footer.html`);

  // Mobile menu toggle (after nav loads)
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      menu.classList.toggle("open");
    });
  }
});
