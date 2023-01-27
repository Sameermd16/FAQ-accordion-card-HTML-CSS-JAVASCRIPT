const arrows = document.querySelector(".arrow");
const answer = document.querySelector(".answer");



arrows.addEventListener("click", () => {
    answer.style.display = "block";
})


// arrows.forEach((arrow) => {
//     arrow.addEventListener("click", () => {
//         arrow.style.display = "block";
//     })
// })