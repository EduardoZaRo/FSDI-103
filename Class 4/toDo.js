const task  = [];
let selectedTasks = 0;
function renderListReversed(){
    let taskList = document.getElementById("todo-list");
    taskList.innerHTML = "";
    for(let i = task.length - 1; i >= 0; i--){
        taskList.innerHTML += `
            <div class="todo-element">
                <input type="checkbox" id="task-${i}" name="task-${i}" onchange='updateSelected(this);'>
                <label for="task-${i}">${task[i]}</label>
            </div>
        `;
    }
}
function updateSelected(e){
    if(e == undefined){
        selectedTasks = 0;
        document.getElementById("task-count").textContent = `Total tasks saved: ${task.length}`;
        document.getElementById("delete-btn-container").innerHTML = `
            <button class="delete-btn" id="delete-btn" onclick="deleteTasks()">Delete 0 selected tasks</button>
        `;
        return;
    }
    selectedTasks = e.checked  ?  selectedTasks+1 : selectedTasks-1;
    document.getElementById("delete-btn-container").innerHTML = `
        <button class="delete-btn" id="delete-btn" onclick="deleteTasks()">Delete ${selectedTasks} selected tasks</button>
    `;
}
function deleteTasks(){
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for(let i = 0; i < checkboxes.length; i++){
        task.splice(checkboxes[i].id.split('-')[1], 1);
    }
    updateSelected();
    renderListReversed();
    if(task.length == 0){
        document.getElementById("todo-list").innerText = "Add a new task!";
    }
}
function addTask(){
    let currentTask = document.getElementById("task");
    if(currentTask.value == '') return;
    task.push(currentTask.value);
    document.getElementById("task-count").textContent = `Total tasks saved: ${task.length}`;
    currentTask.value = "";
    console.log(task);
    renderListReversed();
}

