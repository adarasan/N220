// Navigation Menu and Content Section
const content = document.getElementById("content");
const buttons = document.querySelectorAll("nav button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const tabName = this.id.replace("Tab", "");
    content.innerHTML = `<h1>${tabName} Section</h1>`;
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

// Login Form Validation
document.getElementById("loginBtn").addEventListener("click", function () {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  let errorMessage = "";

  if (!username) {
    errorMessage += "Username is required.\n";
  }
  if (!password) {
    errorMessage += "Password is required.\n";
  } else {
    if (password.length < 8) {
      errorMessage += "Password must be at least 8 characters long.\n";
    }
    if (!/[A-Z]/.test(password)) {
      errorMessage += "Password must contain at least one uppercase letter.\n";
    }
    if (!/\d/.test(password)) {
      errorMessage += "Password must contain at least one number.\n";
    }
  }

  const loginError = document.getElementById("loginError");
  if (errorMessage) {
    loginError.style.display = "block";
    loginError.textContent = errorMessage;
  } else {
    loginError.style.display = "none";
    alert("Login successful!");
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("taskSection").style.display = "block";
  }
});

// Task Manipulation
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
let editingTask = null;

// Add or Update Task
addTaskBtn.addEventListener("click", function () {
  const task = taskInput.value.trim();
  if (!task) {
    alert("Please enter a task.");
    return;
  }

  if (editingTask) {
    editingTask.querySelector("span").textContent = task;
    taskInput.value = "";
    editingTask = null;
    addTaskBtn.textContent = "Add Task";
    return;
  }

  const listItem = document.createElement("li");

  const taskText = document.createElement("span");
  taskText.textContent = task;
  listItem.appendChild(taskText);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", function () {
    taskInput.value = taskText.textContent;
    editingTask = listItem;
    addTaskBtn.textContent = "Update Task";
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(listItem);
  });

  listItem.appendChild(editBtn);
  listItem.appendChild(deleteBtn);
  taskList.appendChild(listItem);

  taskInput.value = "";
});

// Log Out Button
document.getElementById("logoutBtn").addEventListener("click", function () {
  document.getElementById("taskSection").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
  taskInput.value = "";
  taskList.innerHTML = "";
  addTaskBtn.textContent = "Add Task";
  alert("You have successfully logged out.");
});
