let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = [];

function renderTarefas(){
    listElement.innerHTML = "";
    tarefas.map((item)=>{
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(item);
        liElement.appendChild(tarefaText);
        listElement.appendChild(liElement);
    })
}

function adicionarTarefa(){
    if (inputElement.value === ""){
        alert("Adicione alguma tarefa");
        return false;
    }else{
        let novaTarefa = inputElement.value;
        tarefas.push(novaTarefa);
        inputElement.value = "";
        renderTarefas()
    }
}

buttonElement.onclick = adicionarTarefa;