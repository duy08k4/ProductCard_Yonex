const showBtn = document.querySelector(".cardForm--showBtn");
const cardForm = document.querySelector(".cardForm");

showBtn.addEventListener("click", () => {
    cardForm.classList.add("active") 
})

document.querySelector(".heart").addEventListener("mouseover", function(e) {
    e.target.className = "fas fa-heart heart"
})

document.querySelector(".heart").addEventListener("mouseout", function(e) {
    e.target.className = "far fa-heart heart"
})

const closeCardBtn = document.querySelector(".closeCard");
closeCardBtn.addEventListener("click", () => {
    cardForm.classList.remove("active")
})