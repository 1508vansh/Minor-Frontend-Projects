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
        if(flag===true) return true;
    }
    return false;
}
let TotalNoOfMoves = 0;
let ansElem = document.querySelector('#text');
let MainFunction = (event)=>{
    let currElem = event.target;
    if(turn=='O'){
       if(EmptyArr[Number(event.target.id)]!='E'){
         ansElem.textContent = "Invalid Move";
         setTimeout(()=>{
            ansElem.textContent = "";
         },2000)
       }else{
        currElem.innerHTML = turn;
        TotalNoOfMoves++;
        let idx = Number(event.target.id);
        EmptyArr[idx] = turn;
       let ans = checkWinner(turn);
       ansElem.textContent = `Player 1's Move`;
       turn = 'X';
       if(ans==true){
         ansElem.textContent = `Player 2 is Winner! Restart To Play Again`;
         board.removeEventListener('click',MainFunction);
         return;
        }
    }
    }else{
        if(EmptyArr[Number(event.target.id)]!='E'){
            ansElem.textContent = "Invalid Move";
            setTimeout(()=>{
               ansElem.textContent = "";
            },2000)
          }else{
            currElem.innerHTML = turn;
            let idx = Number(event.target.id);
            EmptyArr[idx] = turn;
            TotalNoOfMoves++;
            let ans = checkWinner(turn);
            ansElem.textContent = `Player 2's Move`;
            turn = 'O';
        if(ans==true){
          ansElem.textContent = `Player 1 is Winner! Restart To Play Again`;
          board.removeEventListener('click',MainFunction);
          return;
        }
    }
}
if(TotalNoOfMoves>=9){
    ansElem.textContent = "Match Tied! Restart To Play Again";
}
}
board.addEventListener('click',MainFunction);
let restart = document.querySelector('#restartButton');
restart.addEventListener('click',()=>{
    let allBox = document.querySelectorAll('.cell');
    TotalNoOfMoves = 0;
    for(let i = 0;i<9;i++){
        allBox[i].innerHTML = "";
        EmptyArr[i] = 'E';
    }
    turn = 'X';
    ansElem.textContent = `Player 1's Move`;
    board.addEventListener('click',MainFunction);
})