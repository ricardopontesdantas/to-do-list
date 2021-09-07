const formSearchTodo = document.querySelector("#form-search-todo");
const formAddTodo = document.querySelector("#form-add-todo");
const todosContainer = document.querySelector(".todos-container");
const messageEmptyList = document.querySelector(".alert-warning");

const showMessageIfHasNoItem = (show) => {
  if (show) {
    messageEmptyList.classList.add("alert-display-flex");
    messageEmptyList.classList.remove("alert-display-none");
    return;
  }

  messageEmptyList.classList.add("alert-display-none");
  messageEmptyList.classList.remove("alert-display-flex");
};

const addTodo = (event) => {
  event.preventDefault();

  const inputTodo = event.target.todo;

  const valueTodo = inputTodo.value;

  const isEmptyTodo = valueTodo.trim().length === 0;

  if (isEmptyTodo) return;

  showMessageIfHasNoItem(false);

  todosContainer.innerHTML += `<li class="list-group-item list-group-item-action mb-2" style="display: flex; justify-content: space-between;">${valueTodo} <i class="fas fa-minus-circle"></li>`;

  event.target.reset();
};

const removeTodo = (event) => {
  const buttonRemove = event.target;

  const hasRemoveClass = buttonRemove.classList.value === "fas fa-minus-circle";

  if (hasRemoveClass) {
    const todoItem = buttonRemove.parentElement;

    todoItem.remove();
  }

  const isEmptyList = document.querySelectorAll("li").length === 0;

  if (isEmptyList) showMessageIfHasNoItem(true);
};

const searchTodo = (event) => {
  const searchTerm = event.target.value;

  todosList = Array.from(todosContainer.querySelectorAll("li"));

  todosList.forEach((todo) => {
    const termMatch = todo.textContent
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (!termMatch) {
      todo.style.display = "none";
      return;
    }

    todo.style.display = "flex";
  });
};

formAddTodo.addEventListener("submit", addTodo);

formSearchTodo.addEventListener("input", searchTodo);

formSearchTodo.addEventListener("submit", (event) => event.preventDefault());

todosContainer.addEventListener("click", removeTodo);
