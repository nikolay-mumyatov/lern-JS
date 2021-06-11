"use strict";

const todoControl = document.querySelector(".todo-control"),
  headerInput = document.querySelector(".header-input"),
  todoList = document.querySelector(".todo-list"),
  todoCompleted = document.querySelector(".todo-completed");

let todoData = [];

// Получаем и переводим данные из localStorage
const showTodo = function () {
  if (localStorage.getItem("jsonItem")) {
    let json = localStorage.getItem("jsonItem");
    let arr = JSON.parse(json);
    arr.forEach(function (item) {
      todoData.push(item);
    });
  } else {
    return;
  }
  
};
showTodo();

// Добавляем пункт задачи
const render = function () {
  todoList.textContent = "";
  todoCompleted.textContent = "";

  todoData.forEach(function (item, index) {
    const li = document.createElement("li");
    li.classList.add("todo-item");

    li.innerHTML =
      '<span class="text-todo"></span>' +
      item.value +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      "</div>";

    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    const btnDel = li.querySelector(".todo-remove");
    btnDel.addEventListener("click", function () {
      todoData.splice(index, 1);
      render();
    });

    const btnTodoCompleted = li.querySelector(".todo-complete");
    btnTodoCompleted.addEventListener("click", function () {
      item.completed = !item.completed;
      render();
    });
  });

  let json = JSON.stringify(todoData);
  localStorage.setItem("jsonItem", json);
};
render();

// Запуск рендера для добавления пункта задачи
todoControl.addEventListener("submit", function (e) {
  e.preventDefault();

  if (headerInput.value === "") {
    return false;
  } else {
    const newTodo = {
      value: headerInput.value,
      completed: false,
    };
    todoData.push(newTodo);
    render();
  }

  headerInput.value = "";
});
