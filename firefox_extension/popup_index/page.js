const quickbar = document.querySelectorAll(".container .quickbar div")
// switch selected highlight
quickbar.forEach(item => {
    item.addEventListener("click", e => {
        quickbar.forEach(active => {
            active.className == "active" ? active.classList.remove("active") : "";
        })
        item.classList.add("active")
    })
})