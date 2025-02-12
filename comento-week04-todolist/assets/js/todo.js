let toDos = [];
const TODOS_KEY = "todos";
addBtn = document.querySelector(".input-todo__button");

function saveToDo() {
  //input의 내용을 객체로 만들고 toDos 배열에 추가,localStorage 저장하는 함수
  const inputToDo = document.querySelector(".input-todo__detail").value;
  const inputTime = document.querySelector(".input-todo__time").value;
  const newToDoObj = {
    id: Date.now(), //추가한 시점으로 고유 id 만듦
    todo: inputToDo,
    time: inputTime,
  };
  toDos.push(newToDoObj);
  addToDo(newToDoObj); // 새로 추가한 객체의 내용으로 리스트를 추가
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  console.log(toDos);
}

function addToDo(newToDo) {
  //요소를 추가하고 추가된 버튼에 이벤트(삭제) 부여하는 함수
  const toDoList = document.querySelector(".content__to-do-list");
  const newDiv = document.createElement("div");
  const newCheck = document.createElement("input");
  const newText = document.createElement("span");
  const newBtn = document.createElement("button");
  newCheck.type = "checkbox";

  newDiv.id = newToDo.id;
  newDiv.className = "toDoItem";
  newCheck.className = "toDoCheck";
  newBtn.className = "deleteBtn";
  newText.textContent = `${newToDo.todo}(${newToDo.time})`;
  newBtn.textContent = "❌";
  console.log(newToDo.todo);
  toDoList.appendChild(newDiv);
  newDiv.appendChild(newCheck);
  newDiv.appendChild(newText);
  newDiv.appendChild(newBtn);

  newBtn.addEventListener("click", deleteToDo);
}

function deleteToDo(event) {
  // 선택된 버튼의 부모(class = "toDoItem") 태그 삭제
  const toDoItem = event.target.parentElement; //newDiv, toDoItem
  toDoItem.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(toDoItem.id));
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // filter로 해당 to do list 삭제, 이후 저장
}

addBtn.addEventListener("click", (event) => {
  // 버튼 클릭 시 저장하고 입력칸의 값 초기화
  event.preventDefault();
  saveToDo();
  document.querySelector(".input-todo__detail").value = "";
  document.querySelector(".input-todo__time").value = "";
});

const savedToDos = localStorage.getItem(TODOS_KEY); // 저장된 to do list 불러옴

if (savedToDos !== null) {
  // 추가한 to do list가 있다면 JSON 문자열 객체로 변환하여 배열(toDos)에 저장, 저장된 to do list 화면에 표시
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(addToDo);
}
