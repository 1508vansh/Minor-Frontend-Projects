let options = [
    [0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[2,4,6],[1,4,7],[2,5,8]
];
let EmptyArr = new Array(9).fill('E');
let turn = 'X';
let board = document.querySelector('.board');
function checkWinner(turn){
    for(let i = 0;i<8;i++){
        let flag = true;
        for(let j = 0;j<3;j++){
             let x = options[i][j];
             if(EmptyArr[x]!=turn) flag = false;
        }
        if(flag) return true;
    }
    return false;
}
let TotalNoOfMoves = 0;
let ansElem = document.createElement('h2');
let container = document.querySelector('.container');
ansElem.textContent = `Player 1's is Move`;
container.appendChild(ansElem);
board.addEventListener('click',(event)=>{
    let currElem = event.target;
    if(turn=='O'){
       if(EmptyArr[event.target.id]!='E'){
         ansElem.textContent = "Invalid Move";
         setTimeout(()=>{
            container.removeChild(ansElem);
         },2000)
       }else{
        ansElem.textContent = `Player 1's is Move`;
        currElem.innerHTML = turn;
        TotalNoOfMoves++;
       EmptyArr[event.target.id] = turn;
       let ans = checkWinner(turn);
       if(ans){
         ansElem.textContent = `Player 1 is Winner! Restart To Play Again`;
         container.appendChild(ansElem);
         setTimeout(()=>{
            let allBox = document.querySelectorAll('.cell');
            TotalNoOfMoves = 0;
            for(let i = 0;i<9;i++){
                allBox[i].innerHTML = "";
                EmptyArr[i] = 'E';
            }
            container.removeChild(ansElem);
            ansElem.textContent = `Player 1's is Move`;
            container.appendChild(ansElem);
         },2000);
       }
       turn = 'X';
    }
    }else{
        if(EmptyArr[event.target.id]!='E'){
            ansElem.textContent = "Invalid Move";
            container.appendChild(ansElem);
            setTimeout(()=>{
               container.removeChild(ansElem);
            },2000)
          }else{
            ansElem.textContent = `Player 2's is Move`;
            container.appendChild(ansElem);
            currElem.innerHTML = turn;
            TotalNoOfMoves++;
        EmptyArr[event.target.id] = turn;
        let ans = checkWinner(turn);
        if(ans){
          ansElem.textContent = `Player 2 is Winner! Restart To Play Again`;
          container.appendChild(ansElem);
          setTimeout(()=>{
            let allBox = document.querySelectorAll('.cell');
          TotalNoOfMoves = 0;
          for(let i = 0;i<9;i++){
              allBox[i].innerHTML = "";
              EmptyArr[i] = 'E';
          }
          container.removeChild(ansElem);
          ansElem.textContent = `Player 1's is Move`;
          container.appendChild(ansElem);
          },2000)
        }
        turn = 'O';
    }
}
if(TotalNoOfMoves==9){
    ansElem.textContent = "Match Tied! Restart To Play Again";
}
});
let restart = document.querySelector('#restartButton');
restart.addEventListener('click',()=>{
    let allBox = document.querySelectorAll('.cell');
    TotalNoOfMoves = 0;
    for(let i = 0;i<9;i++){
        allBox[i].innerHTML = "";
        EmptyArr[i] = 'E';
    }
    container.removeChild(ansElem);
    ansElem.textContent = `Player 1's is Move`;
    container.appendChild(ansElem);
})