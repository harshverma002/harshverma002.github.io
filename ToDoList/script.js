const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');



const addTodo = ()=>{
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert("You must write something in your to do.");
        return false;
    }
    // Creating p tag
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);
    
    // Creating delete Btn
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    inputBox.value = "";
}

const updateTodo = (e)=>{
    if(e.target.innerHTML === "Remove"){
        console.log(e.target.parentElement);
        todoList.removeChild(e.target.parentElement);
    }
}

addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);