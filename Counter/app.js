let uservalue = 0;

const buttons = document.querySelectorAll(".btn-primary");
const value = document.querySelector(".value");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let userchoice = button.getAttribute("id");
        selectorchoice(userchoice);
    });
});

const selectorchoice = (userchoice) => {
    const stepvalue = parseInt(document.querySelector("#changeBy").value);

    if (userchoice === "increment") {
        uservalue += stepvalue;
        value.innerHTML = uservalue;
    } else if (userchoice === "decrement") {
        uservalue -= stepvalue;
        value.innerHTML = uservalue;
    } else {
        reset();
    }
};

const reset = () => {
    uservalue = 0;
    value.innerHTML = uservalue;
};
