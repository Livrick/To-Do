const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const itemCount = document.getElementById("itemCount");
const uncheckedCount = document.getElementById("uncheckedCount");

let totalTasks = 0;

function updateCounts() {
    itemCount.textContent = totalTasks;
    uncheckedCount.textContent = countUncheckedTasks();
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span class="task" onclick="toggleTask(this)">${taskText}</span>
            <button onclick="removeTask(this)">Видалити</button>
        `;
        taskList.appendChild(listItem);
        totalTasks++;
        itemCount.textContent = totalTasks;
        taskInput.value = "";
        updateCounts();
    }
}

function toggleTask(task) {
    task.classList.toggle("checked");
    updateCounts();
}

function removeTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
    totalTasks--;
    updateCounts();
}

function deleteAll() {
    const items = document.querySelectorAll("li");
    items.forEach(item => {
        item.remove();
    });
    totalTasks = 0;
    updateCounts();
}


function countUncheckedTasks() {
    const tasks = document.querySelectorAll(".task.checked");
    return tasks.length;
}
