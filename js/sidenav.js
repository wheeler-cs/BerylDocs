import { pages } from "./pages.js";


document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("sidenav");

    pages.forEach(page => {
        const link = document.createElement("a");
        link.href = page.url;
        link.textContent = page.name;
        container.appendChild(link);
    });
});

