let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;//player0
let count=0;
const win=[[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const resetgame=()=>{
    turn0=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
    
};
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        
        if(turn0)
        {
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let iswinner=checkwinner();
        if(count===9 && !iswinner)
        {
            gamedraw();
        }
    });
});
const gamedraw=()=>{
    msg.innerText=`Game was a draw`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const checkwinner=()=>{
    for(let pattern of win){
        
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !="" &&pos2val !="" && pos3val!=""){
            if(pos1val === pos2val && pos2val===pos3val){
                
                showwinner(pos1val);
                return true;
            }
        }       
    }
};
newgamebtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);

