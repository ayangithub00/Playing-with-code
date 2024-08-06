let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        // console.log("choice has been selected")
        playGame(userchoice);

    })
});

// comp gen number
const compgen = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    // console.log(randIdx)
    return options[randIdx]; 
}

// player gen number 
const playGame = (userchoice) =>{
    console.log("user choice = ", userchoice)
    const compChoice = compgen();
    console.log("comp choice = ", compChoice)

    if (userchoice === compChoice){
        draw();
    }
    else{
        winner(userchoice,compChoice);
    }
}

//Winning Logic 
const winner = (userchoice,compChoice) =>{
    let userwin = true;
    if (userchoice === "rock"){
        userwin = compChoice === "paper" ? false:true;
    }
        else if (userchoice === "paper"){
        userwin = compChoice === "scissor" ? false:true;
    }
        else {
        userwin = compChoice === "rock" ? false:true;
    }

    showwinner(userwin);
}

// Show Winner
const showwinner = (userwin) => {
    if (userwin){
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = "You Won!"
    } else{
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = "You Lose"
    }
}

// Draw
const draw = () =>{
    msg.innerHTML = "Game Draw"
}


