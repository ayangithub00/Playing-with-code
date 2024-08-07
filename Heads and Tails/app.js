const choices = document.querySelectorAll(".choice")
const result = document.querySelector("#result")
const compgene = document.querySelector("#compchoice")

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id")
        // console.log("yeh",userchoice)
        playGame(userchoice);
    })
})

const compGen = () =>{
   const options = ["Heads","Tails"];
    const  randIdx = Math.floor(Math.random()*2);
    return options[randIdx];
}


const playGame = (userchoice) =>{
    console.log("userchoics is = ", userchoice)
    const  compchoice = compGen();
    console.log("compchoice is = ", compchoice)
    
    winner(userchoice,compchoice);
}


const winner = (userchoice, compchoice) => {
    let userwin = true;
    if (userchoice != compchoice) {
        userwin = false;
    } else {
        userwin = true;
    }
    showresult(userwin, userchoice, compchoice);
};


const showresult = (userwin,userchoice,compchoice) =>{
    if (userwin){
        result.innerHTML = `You Won by ${userchoice}`
        compgene.innerHTML = compchoice
    }else{
        result.innerHTML = "You Lose"
        compgene.innerHTML = compchoice
    }
    
}