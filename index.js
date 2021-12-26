const addButton = document.getElementById("add")
const delAll = document.getElementById("del");
const input = document.getElementById("input");
const list = document.getElementById("list");

addButton.addEventListener("click", addTodo);

function addTodo(){
    if (input.value){
        const li = document.createElement("li");
        const liText = document.createTextNode(input.value);
        li.appendChild(liText);
        li.setAttribute("class", "list-style")
        list.appendChild(li);
        input.value= ""
    
        const delBtn = document.createElement("button");
        const delText = document.createTextNode("Delete");
        delBtn.appendChild(delText);
        delBtn.setAttribute("class","btn-style del-btn");
        delBtn.setAttribute("onclick", "deleteBtn(this)");
        li.appendChild(delBtn)
    
    
        const editBtn = document.createElement("button");
        const editText = document.createTextNode("Edit");
        editBtn.appendChild(editText);
        li.appendChild(editBtn);
        editBtn.setAttribute("class", "btn-style edit-btn");
        editBtn.setAttribute("onclick", "editBtn(this)");
    }
    
}
delAll.addEventListener("click", deleteAll);

function deleteAll(){
    list.innerHTML="";
}

function deleteBtn(e){
    e.parentNode.remove();
}
function editBtn(e){
    const item = e.parentNode.firstChild.nodeValue;
    newValue= prompt("Change", item);
    e.parentNode.firstChild.nodeValue= newValue
}