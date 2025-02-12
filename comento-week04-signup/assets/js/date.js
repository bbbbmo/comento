// 생년 월일 선택 시 오늘 날짜까지만 고를 수 있는 코드

const date = document.querySelector("#date");
const today = new Date();
const yyyy = String(today.getFullYear());
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");

console.log(yyyy);
console.log(mm);
console.log(dd);

date.max = `${yyyy}-${mm}-${dd}`;
