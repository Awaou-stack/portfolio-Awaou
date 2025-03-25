document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio chargé avec succès");
});

// Menu
let menuItems = document.querySelectorAll("#nav1 ul li");

menuItems.forEach(item => {
    item.addEventListener("click", function () {
        menuItems.forEach(i => i.classList.remove("active"));
        this.classList.add("active");
    });
});

// Voir
document.querySelectorAll(".danse button").forEach(button => {
    button.addEventListener("click", function () {
        alert("Redirection vers plus d'infos...");
    });
});

// Télécharger le CV
document.querySelector("#btn-cv").addEventListener("click", function () {
    let link = document.createElement("a");
    link.href = "cvawaou.pdf";
    link.download = "Mon_CV_cvawaou.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Scroll vers section
document.querySelectorAll("#nav1 ul li").forEach(item => {
    item.addEventListener("click", function () {
        let section = document.querySelector("." + this.textContent.toLowerCase().replace(/\s/g, ""));
        if (section) {
            window.scroll
