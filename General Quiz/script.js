let form = document.querySelector('#quizForm');
let count = 0;
let map = new Map();
map.set("q1","Aryabhatt");
map.set("q2","Thomas Edison");
map.set("q3","Newton");
map.set("q4","Charls Babbage");
map.set("q5","Leonardo-Da-Vinci");
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let data = new FormData(form);
    let currAns = new Map(data.entries());
    for(let key of currAns.keys()){
        if(currAns.get(key)===map.get(key)) count++;
    }
    let score = document.querySelector('#score');
    let TotalScore = `Your Score is : ${count}`;
    score.textContent = TotalScore;
    count = 0;
});
let reset = document.getElementById('reset');
reset.addEventListener('click',()=>{
    document.querySelector('#score').textContent = "";
})