function addTask(taskText) {
  let taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  document.getElementById("taskList").appendChild(taskItem);
}
