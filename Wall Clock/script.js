setInterval(()=>{
let hour = document.querySelector('#hour');
let min = document.querySelector('#minute');
let second = document.querySelector('#second');
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    second.style.backgroundColor = "red";
    second.style.transform = `rotate(${s*6}deg)`;
    min.style.transform = `rotate(${(m*6+s*0.1)}deg)`;
    hour.style.transform = `rotate(${(h*30+m*0.5)}deg)`;
},0)