const formSearchTodo = document.querySelector("#form-search-todo");
const formAddTodo = document.querySelector("#form-add-todo");
const todosContainer = document.querySelector(".todos-container");
const messageEmptyList = document.querySelector(".alert-warning");

const showEmptyListWarning = (mustShow) => {
  messageEmptyList.classList.add(
    mustShow ? "alert-display-flex" : "alert-display-none"
  );
  messageEmptyList.classList.remove(
    mustShow ? "alert-display-none" : "alert-display-flex"
  );
};

const addTodo = (event) => {
  event.preventDefault();

  const inputValue = event.target.todo.value;

  const isEmptyTodo = inputValue.trim().length === 0;

  if (isEmptyTodo) return;

  showEmptyListWarning(false);

  todosContainer.innerHTML += `<li class="list-group-item list-group-item-action mb-2" style="display: flex; justify-content: space-between;">${inputValue} <i class="fas fa-minus-circle"></li>`;

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

  if (isEmptyList) showEmptyListWarning(true);
};

const searchTodo = (event) => {
  const searchTerm = event.target.value;

  const todosList = Array.from(todosContainer.querySelectorAll("li"));

  todosList.forEach((todo) => {
    const termMatch = todo.textContent
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    todo.style.display = termMatch ? "flex" : "none";
  });
};

formAddTodo.addEventListener("submit", addTodo);

formSearchTodo.addEventListener("input", searchTodo);

formSearchTodo.addEventListener("submit", (event) => event.preventDefault());

todosContainer.addEventListener("click", removeTodo);
