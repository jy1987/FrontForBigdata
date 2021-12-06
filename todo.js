const toDoForm=document.querySelector(".to-do-form")
const toDoInput=toDoForm.querySelector("input")
const toDoList=document.querySelector("#to-do-list")

let toDoArray=[]


function saveTodo(toDoArray){
    localStorage.setItem("todo",JSON.stringify(toDoArray))
}

function deleteTodo(e){
    const li=e.target.parentElement
    const id=li.id
    li.remove()
    toDoArray=toDoArray.filter((x) => x.id!==parseInt(id))
    saveTodo(toDoArray)
}

function showingToDoList(todo){
    const li=document.createElement("li")
    li.id=todo.id
    const span=document.createElement("span")
    span.innerText=todo.text
    const button=document.createElement("button")
    button.innerText="X"
    button.classList="ml-5"
    button.addEventListener("click",deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
}

function handleToDoForm(e){
    e.preventDefault()
    const newToDo=toDoInput.value
    toDoInput.value=""
    const newObject={
        text:newToDo,
        id:Date.now()
    }
    toDoArray.push(newObject)
    showingToDoList(newObject)
    saveTodo(toDoArray)
}

const savedToDos=localStorage.getItem("todo")
if(savedToDos!==null){
    const parsedToDos=JSON.parse(savedToDos)
    toDoArray=parsedToDos
    parsedToDos.forEach(showingToDoList);
}
toDoForm.addEventListener("submit",handleToDoForm)