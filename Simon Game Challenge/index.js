
let colors = ["green","red","yellow","blue"];
let started = false;
let sequence = [];
let userClickedSequence = [];
let level = 0;


document.addEventListener("keydown",function(){
    if(!started){
        document.querySelector("#level-title").innerHTML = "Level "+level;
        nextSequence();
        started = true;
    }
})


for(let i=0;i<4;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        userClickedSequence.push(colors[i]);
        blink(i);
        checkSequence(userClickedSequence.length-1);
    })
}
function nextSequence(){
    userClickedSequence=[];
    let nextButton = Math.floor(Math.random()*4);
    sequence.push(colors[nextButton]);
    level++;
    document.querySelector("#level-title").innerHTML = "Level "+level;
    blink(nextButton);
    
}

function checkSequence(lastIndex){
    if(userClickedSequence[lastIndex]===sequence[lastIndex]){
        if(userClickedSequence.length===sequence.length){
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }else{
        gameOver();
    }
}
function gameOver(){
    document.querySelector("body").classList.add("game-over");
    let audio = new Audio("sounds/wrong.mp3");
    audio.play();
    setTimeout(function() {
        document.querySelector("body").classList.remove("game-over");
    }, 100);
    
    level= 0;
    document.querySelector("#level-title").innerHTML = "Game Over, Press A key to try again";
    userClickedSequence= [];
    sequence=[];

    started = false;

}
function blink(thebutton){
    document.querySelector("."+colors[thebutton]).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("."+colors[thebutton]).classList.remove("pressed");
    }, 100);
    let audio = new Audio("sounds/"+colors[thebutton]+".mp3");
    audio.play();
}


