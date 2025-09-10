let SubBtn = document
  .getElementById("sub")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let input = document.getElementById("todo-input").value.trim();

    if (!input) return;

    let ul = document.getElementById("todo-ul");
    let li = document.createElement("li");
    li.classList.add("todo-item");
    let span = document.createElement("span");
    span.textContent = input;

    let btn = document.createElement("button");
    btn.textContent = "×";
    btn.classList.add("delete-btn");

    btn.addEventListener("click", () => li.remove());

    li.appendChild(span);
    li.appendChild(btn);

    ul.appendChild(li);
    document.getElementById("todo-input").value = "";
  });
