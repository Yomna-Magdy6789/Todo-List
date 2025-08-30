      document.addEventListener('DOMContentLoaded', () => {
        const taskInput = document.getElementById('taskInput');
        const addTaskBtn = document.getElementById('addTaskBtn');
        const taskList = document.getElementById('taskList');

        function addTask() {
          const taskText = taskInput.value.trim();
          if (taskText === '') return;

          const listItem = document.createElement('li');

          // Create the task text element
          const textSpan = document.createElement('span');
          textSpan.classList.add('task-text');
          textSpan.textContent = taskText;

          // Create a container for the buttons
          const actionsDiv = document.createElement('div');
          actionsDiv.classList.add('task-actions');

          // Create the toggle button
          const toggleBtn = document.createElement('button');
          toggleBtn.classList.add('toggle-btn');
          toggleBtn.textContent = 'Toggle';

          // Create the delete button
          const deleteBtn = document.createElement('button');
          deleteBtn.classList.add('delete-btn');
          deleteBtn.textContent = 'Delete';

          // Add event listeners for the buttons
          toggleBtn.addEventListener('click', () => {
            textSpan.classList.toggle('completed');
          });

          deleteBtn.addEventListener('click', () => {
            listItem.remove();
          });

          // Append elements to the list item
          actionsDiv.appendChild(toggleBtn);
          actionsDiv.appendChild(deleteBtn);
          listItem.appendChild(textSpan);
          listItem.appendChild(actionsDiv);
          taskList.appendChild(listItem);

          // Clear the input field and focus on it
          taskInput.value = '';
          taskInput.focus();
        }

        // Handle adding a task on button click
        addTaskBtn.addEventListener('click', addTask);

        // Handle adding a task on pressing Enter key
        taskInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            addTask();
          }
        });
      });