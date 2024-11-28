let boxes = [...document.querySelectorAll(".box")];
let resetBtn = document.querySelector("#reset"); 
let newGameBtn = document.querySelector(".newGame");
let display_winner = document.querySelector(".showWiner");
let msg_container = document.querySelector(".msg-container");


let turn0 = true;
let wining_pattern = [ 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click" , ()=>{
        // box.innerText = "hello" 
        console.log("box was clicked")
        if(turn0){
            box.innerText = "0"
            turn0 = false;
        }
        else{
            box.innerText = "X"
            turn0 = true;
        
        }
        box.disabled = true;
        checkWinner();
    });
    
});

const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    };
};
const enableBoxes =() => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};
const reset_game = ()=>{
   turn0 = true;
   enableBoxes();
   msg_container.classList.add('hide')

   
}

showWinner = (winner)=>{
    display_winner.innerText = `Congratulations Winnner is, ${winner}`;
    msg_container.classList.remove("hide");
    disableBoxes()

}
gameDraw = (noOne)=>{
    display_winner.innerText = "Game draw try again"
    msg_container.classList.remove("hide")
    disableBoxes()
}
gameDraw = () => {
     display_winner.innerText = "Game draw, try again!";
     msg_container.classList.remove("hide");
      disableBoxes();
    };


const checkWinner = () => {
    let winnerFound = false;
    for (const pattern of wining_pattern) {
        console.log(pattern[0] , pattern[1], pattern[2]);
        
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );

        let pos1Val =  boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText; 
        let pos3Val =  boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner" , pos1Val);
                showWinner(pos1Val);
                
            }

        }
        if (!winnerFound) {
            let allFilled = Array.from(boxes).every(box => box.innerText !== "")
            if (allFilled) {
                console.log("The game is draw");                
                gameDraw()
            }
        }
    }
};


resetBtn.addEventListener("click", reset_game);
newGameBtn.addEventListener("click", reset_game);