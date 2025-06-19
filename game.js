 let boxes = document.querySelectorAll("#box");
 let resetButton = document.querySelector("#reset");
let newGameButton = document.querySelector("#newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

 let turnO = "true";   // means button var O print hoil 

 const winPattern = [ // wining patter posiblity
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

 ] ;

 const resetGame = () => {
   turnO = true; // turn O true hoil
   enableBoxes(); // sagle boxes enable hoil
   msgContainer.classList.add("hide"); // msg container var hide class add hoil
 }

 const enableBoxes = () => {
   for (let box of boxes) {
      box.disabled = false; // sagle box enable hoil
      box.innerText = ""; // sagle box var text clear hoil

   }
 };





 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");         // ya mule box clickeble zale 
        if(turnO===true)    // box var O print hoil
        {
            box.innerText = "O";  // box var O print hoil
            turnO = false;        // turn O false hoil
        } else {
            box.innerText = "X";  // box var X print hoil
            turnO = true;         // turn O true hoil
        }
        box.disabled = true;    // box disable hoil ekad tyat value enter keli ka 


         // konate pan box la click kela ka check winer function la call karel 

        checkWinner();          // check winner function call hoil

    });
 })

const showWinner = (winner) => {
   msg.innertext = `Congratulation ${winner} You are Win`; // msg var winner print hoil
   msgContainer.classList.remove("hide"); // msg container var hide class remove hoil
   boxes.forEach((box) => {
       box.disabled = true; // sagle box disable hoil
   });
}
 const checkWinner = () => {
    for ( let pattern of winPattern) {
       // console.log(pattern[0], pattern[1], pattern[2]);     // pattern1 sathi 0 ind , p2 sathi 1 ind, p3 sathi 2 ind (eka box sathi)
        //console.log(
             let pos1Val = boxes[pattern[0]].innerText;
             let pos2Val = boxes[pattern[1]].innerText; 
             let pos3Val = boxes[pattern[2]].innerText; 
          
             if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if(pos1Val === pos2Val && pos2Val === pos3Val) { // box var value same asle ka check karel
                 console.log("winner is ", pos1Val); // winner print karel

                 showWinner();

                }
             }
        }
    };

 newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame); // reset button click kele ki resetGame function call hoil