let colorElem = document.querySelectorAll(".box");
colorElem.forEach((elem)=>{
    elem.style.backgroundColor = `${elem.getAttribute("color")}`;
})
let bigbox = document.querySelector(".Capital-container");
bigbox.addEventListener('click',(event)=>{
    bigbox.style.backgroundColor = `${event.target.getAttribute("color")}`;
})