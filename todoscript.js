const inputitem = document.getElementById("todoInput");
const addButton = document.getElementById("addTodoButton");
const todoList = document.querySelector(".todoList");

const getTodoListFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todoList"));
};

const addTodoListToLocalStorage = (localStorageTodo) => {
   localStorage.setItem("todoList", JSON.stringify(localStorageTodo));
};

let localStorageTodo = getTodoListFromLocalStorage() || [];

const addTodoItemOnUI = (currTodo) => {
  const container = document.createElement("div");
  container.classList.add("todo-item");
  container.innerHTML = `<li>${currTodo}</li> <button class="delete-btn">Delete</button>`;
  todoList.appendChild(container);
};

const addTodoItem = (item) => {

  const exists = localStorageTodo.some((todo) => {
  return todo.toLowerCase() === item.toLowerCase();
});

if (exists) {
  alert("Already exists");
  inputitem.value="";
  return;
}

    localStorageTodo.push(item);
    addTodoListToLocalStorage(localStorageTodo);
    addTodoItemOnUI(item);
    inputitem.value = "";
};

const showTodoList = () => {
  localStorageTodo.forEach((currTodo) => {
    addTodoItemOnUI(currTodo);
  });
};

showTodoList();

const removeTodoItem = (e) => {
  const todoRemoveItem = e.target;
  const todoListContent = todoRemoveItem.previousElementSibling.innerText;
  const parentElem=todoRemoveItem.parentElement;

  localStorageTodo = localStorageTodo.filter((currTodo) => {
    return currTodo !== todoListContent;
  });

  addTodoListToLocalStorage(localStorageTodo);
  parentElem.remove();
};

todoList.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("delete-btn"))
    { 
      removeTodoItem(e);
    }
});

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  const item = inputitem.value.trim();

  if (item === "") {
    alert("Please enter a task.");
    return;
  }

  addTodoItem(item);
});
