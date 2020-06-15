// Variables 
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const shakeBtn = document.querySelector(".buttons__shake");

const moveAmount = 30;

let width = canvas.width;
let height = canvas.height;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// Canvas 
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = moveAmount;

ctx.strokeStyle = "#777";

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Functions 
function keyHandler(ev) {
    if (ev.key.includes("Arrow")) {
        ev.preventDefault();
        drawing(ev.key);
    }
}

function drawing(key) {
    ctx.beginPath();
    ctx.moveTo(x, y);

    switch (key) {
        case 'ArrowUp':
            y -= moveAmount;
            break;
        case 'ArrowDown':
            y += moveAmount;
            break;
        case 'ArrowRight':
            x += moveAmount;
            break;
        case 'ArrowLeft':
            x -= moveAmount;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

function clearCanvas() {
    canvas.classList.add("shake");
    ctx.clearRect(0, 0, width, height);

    canvas.addEventListener("animationend", ()=>{
        canvas.classList.remove("shake");
    }, {once: true});
}

setTimeout(()=>{
    document.querySelector(".message").style.display = 'none';
}, 6000);

// Event Listener 
shakeBtn.addEventListener('click', clearCanvas);
window.addEventListener("keydown", keyHandler);
document.querySelector(".btn-up").addEventListener('click', drawing.bind(null, "ArrowUp"));
document.querySelector(".btn-down").addEventListener('click', drawing.bind(null, "ArrowDown"));
document.querySelector(".btn-left").addEventListener('click', drawing.bind(null, "ArrowLeft"));
document.querySelector(".btn-right").addEventListener('click', drawing.bind(null, "ArrowRight"));

