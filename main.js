
let input = document.querySelector('.input');

let power = "";

function insert(num) {
    if (input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else
        input.textContent += num;
}

function clean() {
    input.textContent = "0";
    power = "";
}

function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = "0";
    }
}

function equal() {
    let exp = input.textContent;
    if (input.textContent.includes('^')) {
        let tmp = input.textContent.split('^')
        let num = eval(power);
        let pow = +tmp[1]
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }
    if (exp) {
        input.textContent = eval(exp);
    }
}

function percent() {
    input.textContent = eval(input.textContent) / 100;
}

function constant(name) {
    if (input.textContent == 0) {
        input.textContent = "";
    }
    if (name == "pi")
        input.textContent += Math.PI.toFixed(8);
    if (name == "e")
        input.textContent += Math.E.toFixed(8);
}

function operation(name) {
    if (name == "sqrt")
        input.textContent = Math.sqrt(eval(input.textContent));
    if (name == "sqr")
        input.textContent = Math.pow(eval(input.textContent), 2);
    if (name == "^-1")
        input.textContent = Math.pow(eval(input.textContent), -1);
    if (name == "^") {
        power = input.textContent;
        input.textContent += "^";
    }
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
function fact() {
    input.textContent = factorial(+eval(input.textContent));
}

function log(name) {
    if (name == 'lg') {
        input.textContent = Math.log10(eval(input.textContent)).toFixed(8);
    }
    if (name == 'ln') {
        input.textContent = Math.log(eval(input.textContent)).toFixed(8);
    }
}

document.querySelector('.type').addEventListener('click', function() {
    if (document.querySelector('.type').textContent == "deg") {
        this.textContent = "rad";
        console.log('Градусы')
    } else if (document.querySelector('.type').textContent == "rad") {
        this.textContent = "deg";
        console.log('Радианы')
    }
})


function f(name) {
    if (name == 'sin') {
        if(document.querySelector('.type').textContent == "deg") {

            input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {

            input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString());
        }        
    }
    if (name == 'cos') {
        if(document.querySelector('.type').textContent == "deg") {

            input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {

            input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString());
        } 
    }
    if (name == 'tan') {
        if(document.querySelector('.type').textContent == "deg") {

            input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {

            input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString());
        }  
    }
    if (name == 'ctg') {
        if(document.querySelector('.type').textContent == "deg") {

            input.textContent = parseFloat(1/Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {

            input.textContent = parseFloat(1/Math.tan(eval(input.textContent)).toFixed(8).toString());
        } 
    }
}

const images = ['w.jpeg', 'w1.jpeg', 'w2.jpeg', 'w4.jpeg', 'w5.jpeg', 'w6.jpeg', 'w7.jpeg', 'w8.jpeg', 'w9.jpeg', 'w10.jpeg', 'w11.jpeg', 'w12.jpeg', 'w13.jpeg', 'w14.jpeg', 'w15.jpeg', 'w16.jpeg', 'w17.jpeg', 'w18.jpeg', 'w19.jpeg', 'w20.jpeg'];
let currentImageIndex = 0;
let slideInterval;
const slideshow = document.querySelector('.container');
const darkenButton = document.querySelector('.darken-button');
const playPauseButton = document.getElementById("playPauseButton");

function changeImage() {
    slideshow.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideInterval = setTimeout(changeImage, 3000); // Изменение картинки каждые 3 секунды
}

changeImage(); 

function playPause() {
    if (slideInterval) {
        clearTimeout(slideInterval);
        slideInterval = null;
        playPauseButton.innerHTML ="Play Images"
    } else {
        playPauseButton.innerHTML ="Pause Images"
        slideInterval = setTimeout(changeImage, 3000); 
    }
}



