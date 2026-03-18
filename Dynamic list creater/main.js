const input = document.getElementById("itemInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("list");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value === "") alert("invalid input");
  console.log(input);

  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.classList.add("delete");
  const text = document.createElement("span");
  text.textContent = input.value;

  console.log(delBtn);

  li.appendChild(text);
  li.appendChild(delBtn);

  delBtn.addEventListener("click", (e) => {
    e.preventDefault();
    confirm("Pakka delete karna hai?") ? list.removeChild(li) : null;
  });

  li.addEventListener('dblclick' , (e)=>{
    input.value = text.textContent;
    list.removeChild(li);
  })

  list.appendChild(li);
  input.value = "";
});
