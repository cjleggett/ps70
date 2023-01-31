const urlParams = new URLSearchParams(window.location.search);
const first = urlParams.get('first');

if (first !== "False") {
    console.log("block");
    let proj = document.getElementById("projects");
    proj.classList.add("appear");
    let title = document.getElementById("title");
    title.classList.add("typed");
    let intro = document.getElementById("intro");
    intro.classList.add("typed2");
}