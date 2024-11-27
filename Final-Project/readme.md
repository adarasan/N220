### Project Name

N220 Final Project - Task Unknown ( Future Goals).

### Github Link

https://adarasan.github.io/N220/Final-Project

### Major Features

### Login Form

    DOM References:
        Username Input Field
        Password Input Field
        Login Button

    Logic:
        Validate the form when the login button is clicked:
            Check if the username is empty and prompt the user to fill it in.
            Validate the password with the following checks:
                Ensure the password is not empty.
                Ensure it has at least 8 characters.
                Ensure it includes at least one capital letter.
                Ensure it includes at least one number.
        If the username and password are valid, allow login; otherwise, display error messages.

    Events:
        Attach a click event to the login button to trigger the validation logic.

### Dashboard

    DOM References:
        Navigation Menu
        Content Sections (e.g., Profile, Settings, etc.)

    Logic:
        Dynamically render content based on user interaction with the navigation menu.
        Highlight the current section in the menu.

    Loops and Conditions:
        Use loops to dynamically generate menu items or populate sections.
        Use conditional logic to determine the current content section.

### Task Manipulation

    DOM References:
        Task Input Field
        "Add Task" Button
        Task List Container

    Logic:
        Allow the user to add tasks by entering text in the input field and clicking "Add Task."
        Validate input to ensure it's not empty.
        Append tasks to the task list dynamically.
        Allow users to remove tasks by clicking a "Delete" button next to each task.

    Data Structure:
        Store tasks in an array or a list-like object.
        Use this array to dynamically render the task list and track changes.

    Loops and Conditions:
        Use loops to render tasks from the array.
        Use conditional logic to display a message if the task list is empty.

### Key Concepts Highlighted

    Loops:
        Used to dynamically generate and display elements (e.g., tasks, page content).
    Conditionals (if-else):
        Used for validation checks and determining current sections.
    DOM Manipulation:
        Referencing and updating elements dynamically based on user interaction.
    Data Types:
        Strings for inputs, arrays for task management.
