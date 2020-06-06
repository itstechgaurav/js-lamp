let btn = document.getElementById("btn-on-off");
let light = document.querySelector(".light");

btn.addEventListener("click", _ => {
    light.style.display = btn.checked ? "block" : "none";
})