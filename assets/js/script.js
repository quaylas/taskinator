// access and store DOM elements
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var formEl = document.querySelector("#task-form");

// code to dynamically create a task in "tasks-to-do"
var createTaskHandler = function(){
    // keep the browser from borking us
    event.preventDefault();

    var taskItemEl = document.createElement("li");
    taskItemEl.className = "task-item";
    taskItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(taskItemEl);
}
formEl.addEventListener("submit", createTaskHandler);

