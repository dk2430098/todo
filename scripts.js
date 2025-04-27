let inp = document.querySelector("#task");
let btn = document.querySelector("button");
let ul = document.querySelector("#task-list");

btn.addEventListener("click", function () {
  let taskText = inp.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Check for duplicate tasks
  let tasks = ul.querySelectorAll("li");
  for (let task of tasks) {
    if (task.firstChild.textContent.trim() === taskText) {
      alert("This task already exists!");
      inp.value = "";
      return;
    }
  }

  let item = document.createElement("li");
  item.innerText = taskText;

  let delBtn = document.createElement("button");
  delBtn.classList.add("delete");
  delBtn.innerText = "Delete";

  ul.appendChild(item);
  item.appendChild(delBtn);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.classList.add("fade-out");
    setTimeout(() => listItem.remove(), 300); // Match animation duration
  }
});
