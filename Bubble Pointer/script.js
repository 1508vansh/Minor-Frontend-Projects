let element = document.querySelector('body');
let arr = ["Hi","Hello","Bravo!","Yahoo!","Hurrey","Wohoo!","Wolah!"];
element.addEventListener('click',(e)=>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let color = `rgb(${r},${g},${b})`;
    let randIdx = Math.floor(Math.random()*arr.length);
    let createBubble = document.createElement('div');
    createBubble.className = 'bubble';
    document.body.appendChild(createBubble);
    let x = e.clientX;
    let y = e.clientY;
    createBubble.style.height = "100px";
    createBubble.style.width = "100px";
    createBubble.style.left = `${x-50}px`;
    createBubble.style.top = `${y-50}px`;
    createBubble.style.cursor = "none";
    createBubble.style.backgroundColor = color;
    console.log(x);
    createBubble.textContent = arr[randIdx];
    setTimeout(()=>{
        document.body.removeChild(createBubble);
    },2000)
})
