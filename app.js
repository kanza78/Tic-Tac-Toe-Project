let boxes = document.querySelectorAll(".box");
let reset=document.querySelector("#rst");
let newGame=document.querySelector("#new");
let msgcontainer = document.querySelector(".msg");
let m=document.querySelector("#ms");

let turnO=true;

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turn0 = true;
    enableBoxes(); 
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
        console.log("Box was Clicked");
        if(turnO) {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkwinner();
       
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }}

    const enableBoxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }}
const showWinner=(Winner) =>{
    m.innerText = `Congratulations Winner is Player  ${Winner}`;

    msgcontainer.classList.remove("hide");
    disableBoxes();
}



const checkwinner =() =>{
    for(pattern of win){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val != "" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val===pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }

};
 
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
