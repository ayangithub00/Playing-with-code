let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgConatiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player x , player O

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("A")
        if (turnO) {
            box.innerText = "O";
            // box.style.color="blue";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;  // if we are writing false in place of true we are enabling the box to change. 
        checkWinner();
    })
})

const checkWinner = () => {
    let isDraw = true;
    for (let postion of winPattern) {
        let pos0val = boxes[postion[0]].innerText
        let pos1val = boxes[postion[1]].innerText
        let pos2val = boxes[postion[2]].innerText

        if (pos0val != "" && pos1val != "" && pos2val != "") {
            if (pos0val === pos1val && pos1val === pos2val) {
                console.log("Winner", pos0val);
                showWinner(pos0val);
                
            }
        }

    }

    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false; 
        }
    })
    if (isDraw) {
        showDraw();
    }
}



const showDraw = () => {
    msg.innerText = "It is a Draw!"
    msgConatiner.classList.remove("hide");
    disableboxes();
}

const showWinner = (Winner) => {
    msg.innerText = `Congrats , Winner is ${Winner} `;
    msgConatiner.classList.remove("hide");
    disableboxes();
}

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const resetgame = () => {
    turnO = true;
    enableboxes();
    msgConatiner.classList.add("hide");
}

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

reset.addEventListener("click", resetgame);
newGameBtn.addEventListener("click", resetgame);