const board = document.querySelector(".board");
const addColumn = document.querySelector(".add-column");

let draggedTask = null;

addColumn.addEventListener("click", (e) => {
  e.preventDefault();
  const text = prompt("Enter your column name");
  if (!text) return;

  const column = document.createElement("div");
  column.classList.add("column");
  column.innerHTML = `
    <div class="column-header">
      <h2>${text}</h2>
      <button class="delete-column-btn">&times;</button>
    </div>
    <div class="tasks"></div>
    <button class="add-btn">+ Add Task</button>
    `;
  board.insertBefore(column, addColumn);
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    const text = prompt("Enter your task");
    if (!text) return;

    const task = document.createElement("div");
    task.classList.add("task");
    task.draggable = true;
    task.innerHTML = `
        <span>${text}</span>
        <button class="delete-task-btn">&times;</button>
    `;

    e.target.previousElementSibling.appendChild(task);
  }

  if (e.target.classList.contains("delete-task-btn")) {
    e.target.closest(".task").remove();
  }

  if (e.target.classList.contains("delete-column-btn")) {
    e.target.closest(".column").remove();
  }
});

document.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("task")) {
    draggedTask = e.target;
    e.target.classList.add("dragging");
  }
});

document.addEventListener("dragend", (e) => {
    if (draggedTask) {
        e.target.classList.remove("dragging");
        draggedTask = null;
    }
});

board.addEventListener("dragover", (e) => {
    e.preventDefault();
    const column = e.target.closest(".column");
    if (column) {
        column.classList.add("drag-over");
        const tasksContainer = column.querySelector(".tasks");
        if (draggedTask) {
            tasksContainer.appendChild(draggedTask);
        }
    }
});

board.addEventListener("dragleave", (e) => {
    const column = e.target.closest('.column');
    if (column) {
        column.classList.remove('drag-over');
    }
});

board.addEventListener("drop", (e) => {
    const column = e.target.closest('.column');
    if (column) {
        column.classList.remove('drag-over');
    }
});
