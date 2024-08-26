//To-Do-List

let Input = document.querySelector("#todoItemInput")
let todoForm = document.querySelector("#todoForm")
let Edit = document.querySelector(".edit")
let Delete = document.querySelector(".delete")
let Display = document.querySelector("#listContainer")

//Making Submit button responsive and sending its value to console 
todoForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const Item = Input.value;    
    if(Item){
        // console.log(Item);
        addList(Item);
    }
    Input.value = "";
})

const addList = (Item) =>{

// Creating a list where text can dispaly.
   const li = document.createElement('li')
   const span = document.createElement('span')
   span.textContent = Item;
   li.appendChild(span)
   Display.appendChild(li)
   

// Creating the Edit option In list.   
    let editbutton = document.createElement('button')
    const edit = document.createTextNode('✏️')
    editbutton.appendChild(edit)
    li.appendChild(editbutton)
    editbutton.addEventListener('click',(e)=>{
        if(e.target.innerText==="✏️"){
            editing(span);
        }
    })

// Creating the delete option in list.
    let delbutton = document.createElement('button')
    const del = document.createTextNode('🗑️')
    delbutton.appendChild(del)
    li.appendChild(delbutton)
    delbutton.addEventListener('click',(e)=>{
        if(e.target.innerText==='🗑️'){
            deleting(li);
        }
    });
}

// Deleting item
const deleting = (li) =>{
    
    li.remove();
    
}

// Editing function
const editing = (span) => {
    // Create an input field and populate it with the current text
    let input = document.createElement('input');
    input.type = 'text';
    input.value = span.textContent;
    span.parentElement.appendChild(input);
    input.focus();
    
    // Remove the span and update the text when input loses focus
    input.addEventListener('blur', () => {
        span.textContent = input.value;
        input.remove();
    });
};









