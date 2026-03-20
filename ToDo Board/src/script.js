// const columns = document.querySelectorAll(".column");
const board = document.querySelector(".board");
const addColumn = document.querySelector(".add-column");
// const columns = document.querySelectorAll(".column");

let draggedTask = null;

addColumn.addEventListener("click", (e) => {
  e.preventDefault();
  const text = prompt("Enter your column name");
  if (text === "") return;

  const column = document.createElement("div");
  column.classList.add("column");
  column.innerHTML = ` <h2>${text}</h2>
   <div class="tasks"></div>
   <button class="add-btn">+ Add Task</button>
    `;
  board.appendChild(column);
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    const text = prompt("Enter your task");
    if (text === "") return;

    const task = document.createElement("div");
    task.classList.add("task");
    task.textContent = text;
    task.setAttribute("draggable", "true");

    e.target.previousElementSibling.appendChild(task);
  }
});

document.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("task")) {
    draggedTask = e.target;
    e.target.classList.add("dragging");
    console.log("Dragged start --> ", draggedTask);
  }
});

document.addEventListener("dragend", (e) => {
  e.preventDefault();

  e.target.classList.remove("dragging");
  draggedTask = null;
});

const observer = new MutationObserver(() => {
  const columns = document.querySelectorAll(".column");

  console.log("Updated NodeList:", columns);

  columns.forEach((col) => {
    col.addEventListener("dragover", (e) => {
      e.preventDefault();
      col.classList.add("drag-over");
    });

    col.addEventListener("dragleave", (e) => {
      col.classList.remove("drag-over");
    });

    col.addEventListener("drop", (e) => {
      e.preventDefault();
      console.log("item droped!!!");
      col.classList.remove("drag-over");

      if (draggedTask) col.querySelector(".tasks").appendChild(draggedTask);
    });
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
