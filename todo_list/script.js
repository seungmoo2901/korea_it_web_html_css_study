const todoInput = document.querySelector("#todoInput");
const addTodoBtn = document.querySelector("#addTodoBtn");
const todoList = document.querySelector("#todoList");

let todos = [];
let nextTodoId = 1;

function addTodo() {
  const todoText = todoInput.value.trim(); //입력된 택스트 가져와서 양쪽 공백제거

  if (todoText === "") {
    alert("할일을 입력해주세요!");
    return;
  }

  const newTodo = {
    id: nextTodoId++,
    text: todoText,
    isEditing: false, //수정 중인지 여부를 나타내는 플래그
  };

  todos.push(newTodo);
  console.log(todos);
  todoInput.value = "";
  todoInput.focus();
}

addTodoBtn.addEventListener("click", addTodo);

//입력하고 엔터후 알아서 추가됨
todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodoBtn.click();
  }
});
