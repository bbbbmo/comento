// 알람 리스트를 추가하는 기능
const addBtn = document.querySelector(".alarm__add");
const list = document.querySelector(".list");
let i = 0;

function addList(event) {
  event.preventDefault();
  const listTitle = document.querySelector(".alarm__title").value;
  const listHour = document.querySelector(".alarm__hour").value;
  const listMinute = document.querySelector(".alarm__minute").value;
  const listSecond = document.querySelector(".alarm__second").value;

  list.innerHTML += `<div class="list__item"><div class="item__title">${listTitle}</div><div class="item__detail">${listHour}: ${listMinute}: ${listSecond} <button class="item__delete">❌</button></div></div>`;
  //기존 입력 값 초기화
  document.querySelector(".alarm__title").value = "";
  document.querySelector(".alarm__hour").value = ""; // listHour = "";는 왜 안되는지? const 때문?
  document.querySelector(".alarm__minute").value = "";
  document.querySelector(".alarm__second").value = "";
  const deleteBtn = document.querySelectorAll(".item__delete");
  deleteBtn.forEach((button) => {
    button.addEventListener("click", deleteList);
  });
  if (i < 2) {
    i++;
  } else if (i == 2) {
    document.querySelector(".alarm__add").disabled = true;
    i++;
  }
  console.log(i);
}

addBtn.addEventListener("click", addList); //버튼 클릭 시 함수 작동

//알람 리스트를 삭제하는 기능

function deleteList(event) {
  event.preventDefault();
  const target = event.target.closest(".list__item");
  target.remove();
  document.querySelector(".alarm__add").disabled = false;
  i--; // 아이템이 삭제되었으므로 카운트 감소
  console.log(i);
}
