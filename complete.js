document.addEventListener("DOMContentLoaded", function() {
    const completedTaskList = document.getElementById("completedTaskList");
    const completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

    completedTasks.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = 'task-item';
        li.innerHTML = `${item.task} (Start: ${item.startDate}, End: ${item.endDate})`;

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function() {
            deleteTask(index);
            completedTaskList.removeChild(li);
        };

        li.appendChild(deleteButton);
        completedTaskList.appendChild(li);
    });

    function deleteTask(index) {
        let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
        completedTasks.splice(index, 1); // Remove task at index
        localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    }
});
