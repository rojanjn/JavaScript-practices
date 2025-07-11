const colors = [
    "#DCD0A8", "#78B9B5", "#DC3C22", "#CC66DA", "#FAEB92", "#819067", "#63C8FF", "#BA487F", "#C83F12", "#DB8DD0"
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {

    const randomNumber = getRandNum();
    document.body.style.backgroundColor = colors[randomNumber];

    color.textContent = colors[randomNumber];
});

function getRandNum() {
    return Math.floor(Math.random() * colors.length);
}