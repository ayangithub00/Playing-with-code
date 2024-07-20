const buttons = document.querySelectorAll('.button');  // here we will be selecting all the buttons 
const body = document.querySelector("body");    // then selecting body

buttons.forEach((button) => {           // using loop so that all button are selected 
    console.log(button);
    button.addEventListener('click', (e) => {       // adding the event listner 
        console.log(e, e.target);       // e.target is targetting the html inner element 
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id;
        };
        if (e.target.id === "red") {
            body.style.backgroundColor = e.target.id;
        };
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
        };
        if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id;
        };
    });

});