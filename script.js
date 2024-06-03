// Function to add a new task
function addTask() {
    // Get the input value
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    // Check if input is not empty
    if (taskText !== "") {
        // Create a new list item
        var li = document.createElement("li");
        li.textContent = taskText;

        // Add the new task to the list
        document.getElementById("taskList").appendChild(li);

        // Clear the input field
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
