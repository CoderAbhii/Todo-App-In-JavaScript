let tasks = [];
const renderTasks = () => {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${task}</span><button onclick="removeTask(${index})">Remove</button>`;
        taskList.appendChild(li);
    });
}
const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const newTask = taskInput.value.trim();

    if (newTask !== '') {
        tasks.push(newTask);
        taskInput.value = '';
        renderTasks();
    }
}
const removeTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
}
renderTasks();