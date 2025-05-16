
const main = document.querySelector("#main")


const color= document.querySelectorAll(".color")

color.forEach(color => {
  color.addEventListener("click", function () {
    const col = this.id;
    main.style.backgroundColor = col;
  });
});