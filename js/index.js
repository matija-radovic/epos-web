const hamburger = document.querySelector(".hamburger");
const navMeni = document.querySelector(".nav-meni");
const jelovnikRadio = document.querySelector(".jelovnik-traka");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMeni.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMeni.classList.remove("active");
}))

if(jelovnikRadio != null){
    jelovnikRadio.addEventListener("change", () => {
        const radioDugmici = document.getElementsByName("hrana");
        radioDugmici.forEach(n => {
            let tempElement = document.getElementById(n.className);
            if (n.checked) {
                tempElement.style.display = "table";
            } else
            tempElement.style.display = "none";
        });
    })
}




