//App state
let sum;
//Cached Elements
const inputEl = document.querySelector("#number");
const total = document.querySelector("p");
//Event Listeners
document.getElementById("plus").addEventListener("click",plusClick);
document.getElementById("minus").addEventListener("click",minusclick);
//functions
function init(){
    sum = 0;
    render();
}
init();
function render(){
    if(sum >= 0){
        total.textContent = sum;
        total.style.color = "green";
    } else {
        total.textContent = sum;
        total.style.color = "red";
    }
}

function plusClick(){
    let number = parseInt(inputEl.value);
    sum += number;
    render();
}

function minusclick(){
    let number = parseInt(inputEl.value);
    sum -= number;
    render();
}