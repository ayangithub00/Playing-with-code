let storenum = ""

const button = document.querySelectorAll(".btn");
let Input = document.querySelector(".display");

// Keydown Event
document.addEventListener('keydown',(e)=>{
   
     if (!isNaN(e.key)) { 
        storenum += e.key;  
        Input.value = storenum;
        
    }
    else if (e.key==="Enter"){
        try {
            storenum = eval(storenum);
            Input.value = storenum;
        } catch (error) {
            Input.value = "Error";
            storenum = "";
        }
        
    }
    else if (keyoperations(e)){}
    
})

//Click Event
button.forEach((btn) => {
    btn.addEventListener('click', (e)=>{
        
        if (!isNaN(e.target.innerText)) { 
            storenum += e.target.innerText;  
            Input.value = storenum;
        }
        else if (e.target.innerText==="="){
            try {
                storenum = eval(storenum);
                Input.value = storenum;
            } catch (error) {
                Input.value = "Error";
                storenum = "";
            }
            
        }
        else if (operations(e)){}
        
        else{
            Clear(e);
        }
    })
    
});

//Logic of click 
const operations = (e) => {
    if (["+", "-", "*", "/"].includes(e.target.innerText)) {
        storenum += ` ${e.target.innerText} `;
        Input.value = storenum;
        return true;
    }
    return false;
};


// Logic for Keydown
const keyoperations = (e) => {
    if (["+", "-", "*", "/"].includes(e.key)) {
        storenum += ` ${e.key} `;
        Input.value = storenum;
        
    }
    
};

//Clear
const Clear = (e) => {
    if (e.target.innerText==="C"){
        storenum = ""
        Input.value = storenum
    }
}

