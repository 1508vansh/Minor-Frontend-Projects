let arr = ["The only way to do great work is to love what you do.",
"Success is not the key to happiness. Happiness is the key to success.",
"In the middle of every difficulty lies opportunity.",
"Life is what happens when you're busy making other plans.",
"Do not go where the path may lead, go instead where there is no path and leave a trail.",
"The best way to predict the future is to invent it.",
"Happiness is not something ready-made. It comes from your own actions.",
"The purpose of our lives is to be happy.",
"What you get by achieving your goals is not as important as what you become by achieving your goals.",
"Believe you can, and you're halfway there.",
"Dream big and dare to fail.",
"It does not matter how slowly you go as long as you do not stop.",
"Act as if what you do makes a difference. It does.",
"Keep your face always toward the sunshine—and shadows will fall behind you.",
"You miss 100% of the shots you don’t take.",
"I have not failed. I've just found 10,000 ways that won't work.",
"The future belongs to those who believe in the beauty of their dreams.",
"It always seems impossible until it's done.",
"Be the change that you wish to see in the world.",
"Your time is limited, so don’t waste it living someone else’s life."];
//initial text
let element = document.querySelector(".Quote");
element.textContent = arr[0];
function fun(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    let colorElem = document.querySelector(".container");
    let color = `rgb(${a},${b},${c})`;
    colorElem.style.backgroundColor = color;
    let randomIdx = Math.floor(Math.random()*20);
    let element = document.querySelector(".Quote");
    element.textContent = arr[randomIdx];
}
setInterval(fun,4000);