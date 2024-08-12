// generate a random color
const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = () => {
    if(!intervalId){                                   //!intervalId means that if it is not null then proceed further 
   intervalId = setInterval(colorChange, 1000);
  }};
  
  colorChange = () => {
    document.body.style.backgroundColor=randomColor();
  }
   
  
  stopChangingColor = () =>{
    clearTimeout(intervalId);
    intervalId=null;
  }
  
  document.querySelector("#start").addEventListener('click',startChangingColor);
  document.querySelector("#stop").addEventListener('click',stopChangingColor);