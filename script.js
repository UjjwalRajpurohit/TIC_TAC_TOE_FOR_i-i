let move = new Audio("Move.mp3");
let winner = new Audio("minions-cheering.mp3");
let sinchan = new Audio("Uuooh.mp3");
let sinchanwin = new Audio("shinchan-win.mp3");

let turn = "X";
let gameover=false;

const changeturn=()=>{
    return turn ==="X"?"0":"X";
}
const checkwin=()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,2.5,5,0],
        [3,4,5,2.5,15,0],
        [6,7,8,2.5,25,0],
        [0,3,6,5,2.5,90],
        [1,4,7,15,2.5,90],
        [2,5,8,25,2.5,90],
        [0,4,8,2,14.5,45],
        [2,4,6,2.5,15,-45],
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText)&&(boxtexts[e[2]].innerText === boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText !=="")){
            document.querySelector('.move-info').innerText = boxtexts[e[0]].innerText+"  Won"
            gameover=true;
            if(e[5]===0 ||e[5]===45||e[5]==-45){
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width = "25vw";
            }
            else if(e[5]===90){
            document.querySelector('.line1').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(0deg)`
            document.querySelector('.line1').style.height = "25vw";
            }
            if(boxtexts[e[0]].innerText === "X"){
                document.getElementsByTagName('img')[0].style.width="170px"
                document.getElementsByTagName('img')[1].style.width="190px"
                sinchan.play();
                sinchanwin.play();
            }
            else{
                document.getElementsByTagName('img')[2].style.width="210px"
                document.getElementsByTagName('img')[3].style.width="160px"
                winner.play();
            
                
            }
    }
    
    })

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector(".boxtext");
    if(boxtext.innerText!==""){
        document.getElementsByClassName("move-info")[0].innerText = "Tie"
    }
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText=turn;
            turn = changeturn();
            move.play();
            checkwin();
            if(!gameover){
            document.getElementsByClassName("move-info")[0].innerText = "Turn of "+turn;
            }
        
        }
    })
})
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    })
    turn="X";
    gameover=false;
    document.querySelector('.line').style.width = "0vw";
    document.querySelector('.line1').style.height = "0vw";
    document.getElementsByClassName("move-info")[0].innerText = "Turn of "+turn;
    document.getElementsByTagName('img')[0].style.width="0px"
    document.getElementsByTagName('img')[1].style.width="0px"
    document.getElementsByTagName('img')[2].style.width="0px"
    document.getElementsByTagName('img')[3].style.width="0px"

})