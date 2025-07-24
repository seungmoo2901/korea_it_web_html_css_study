// HTML 요소 선택
const todoInput = document.querySelector("#todoInput"); // 할 일을 입력하는 input 요소
const addTodoBtn = document.querySelector("#addTodoBtn"); // '추가' 버튼
const todoList = document.querySelector("#todoList"); // 할 일 목록을 보여줄 ul 요소

// 할 일 목록 저장용 배열과 고유 ID를 위한 변수
let todos = []; // 할 일들을 저장하는 배열
let nextTodoId = 1; // 각 할 일에 고유한 ID를 부여하기 위한 숫자 (자동 증가)

// 할 일 목록을 화면에 렌더링하는 함수
function renderTodo() {
  todoList.innerHTML = ""; // 기존 목록 초기화

  // todos 배열을 순회하면서 각 할 일을 li 요소로 만들어 추가
  todos.forEach((todo) => {
    const listItem = document.createElement("li"); // li 요소 생성
    listItem.dataset.id = todo.id; // 데이터 속성(data-id)으로 고유 ID 부여

    // 수정 중인 상태일 경우
    if (todo.isEditing) {
      listItem.classList.add("editing"); // CSS 클래스 추가 (스타일용)

      listItem.innerHTML = `
          <input type="text" class="edit-input" value="${todo.text}"> <!-- 수정 입력창 -->
          <div class="todo-actions">
            <button class="save-btn">저장</button>
            <button class="cancel-btn">취소</button>
          </div>
      `;
    } else {
      // 일반 상태일 경우
      listItem.innerHTML = `
          <span class="todo-text">${todo.text}</span> <!-- 할 일 텍스트 -->
          <div class="todo-actions">
            <button class="edit-btn">수정</button>
            <button class="delete-btn">삭제</button>
          </div>
      `;
    }

    todoList.appendChild(listItem); // 만든 li 요소를 ul에 추가
  });
}

// 할 일을 추가하는 함수
function addTodo() {
  const todoText = todoInput.value.trim(); // 입력값 앞뒤 공백 제거

  if (todoText === "") {
    alert("할일을 입력해주세요!"); // 빈값일 경우 경고
    return;
  }

  // 새 할 일 객체 생성
  const newTodo = {
    id: nextTodoId++, // 고유 ID 부여 후 증가
    text: todoText, // 입력된 텍스트 저장
    isEditing: false, // 수정 상태는 기본적으로 false
  };

  todos.push(newTodo); // 배열에 추가
  console.log(todos); // 콘솔 로그 (디버깅용)
  todoInput.value = ""; // 입력창 초기화
  todoInput.focus(); // 입력창에 다시 포커스 주기
  renderTodo(); // 화면 갱신
}

// 삭제 함수
function deleteTodo(id) {
  if (!confirm("정말 삭제하시겠습니까?")) {
    return; // 취소 시 아무것도 안 함
  }

  todos = todos.filter((todo) => todo.id !== id); // 해당 ID를 제외한 목록으로 갱신
  renderTodo(); // 화면 다시 그림
}

// 수정 버튼 클릭 시 호출되는 함수
function editTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id
      ? { ...todo, isEditing: true }
      : { ...todo, isEditing: false }
  );
  renderTodo();

  const editInput = todoList.querySelector(`li[data-id="${id}"] .edit-input`);
  if (editInput) {
    editInput.focus();
    editInput.select();
  }
}

// 저장 버튼 클릭 시 호출되는 함수
function saveTodo(id, newText) {
  if (newText.trim() === "") {
    alert("수정할 내용을 입력해주세요"); // 빈 입력 방지
    return;
  }

  // 해당 ID의 할 일 텍스트를 수정하고 수정 상태 해제
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, text: newText.trim(), isEditing: false } : todo
  );
  renderTodo(); // 렌더링 갱신
}

function cancelTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, isEditing: false } : todo
  );
  renderTodo();
}

// '추가' 버튼 클릭 이벤트 연결
addTodoBtn.addEventListener("click", addTodo);

// 엔터 키로도 할 일 추가되게 설정
todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodoBtn.click(); // '추가' 버튼 클릭 이벤트 실행
  }
});

// 수정, 삭제, 저장 버튼 클릭 이벤트를 한번에 처리
todoList.addEventListener("click", (event) => {
  const target = event.target; // 클릭된 요소
  const listItem = target.closest("li[data-id]"); // 클릭된 요소가 속한 li 요소 찾기

  if (!listItem) return; // li 요소가 아니면 무시

  const todoId = parseInt(listItem.dataset.id); // data-id 값 가져와 숫자로 변환

  if (target.classList.contains("delete-btn")) {
    deleteTodo(todoId); // 삭제 처리
  } else if (target.classList.contains("edit-btn")) {
    editTodo(todoId); // 수정 모드로 전환
  } else if (target.classList.contains("save-btn")) {
    const editInput = listItem.querySelector(".edit-input"); // 입력된 수정값 가져오기
    saveTodo(todoId, editInput.value); // 수정값 저장
  } else if (target.classList.contains("cancel-btn")) {
    cancelTodo(todoId);
  }
});
