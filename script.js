const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const navBtn = document.querySelector(".navbtn");
const navPanel = document.getElementById("navpanel");

if (navBtn && navPanel) {
  navBtn.addEventListener("click", () => {
    const open = navBtn.getAttribute("aria-expanded") === "true";
    navBtn.setAttribute("aria-expanded", String(!open));
    navPanel.hidden = open;
  });

  navPanel.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.tagName === "A") {
      navBtn.setAttribute("aria-expanded", "false");
      navPanel.hidden = true;
    }
  });
}