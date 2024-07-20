const clock = document.querySelector('#clock');


setInterval(() => {
    let date = new Date();
    clock.innerHTML=date.toLocaleTimeString();
    dat.innerHTML=date.toLocaleDateString();
    
}, 1000);


