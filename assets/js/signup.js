const signUpBtn = document.querySelector(".signup");
const checkBtn = document.querySelector(".check");
const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^*])[A-Za-z\d!@#$%^*]{8,20}$/; //정규 표현식, 영문자, 숫자, 특수문자(!@#$%^*) 포함 8~20자
const USER_ID = "userId"; // localStorage의 아이디 키값
const USER_PASSWORD = "userPassword"; // localStorage의 비밀번호 키값

signUpBtn.disabled = true; //회원 가입 버튼은 초기에 비활성화

// 1. 아이디
function saveId() {
  // 아이디를 localStorage에 저장하는 함수
  const id = document.querySelector("#id").value;
  localStorage.setItem(USER_ID, id);
}

function checkId() {
  // 입력한 아이디를 기존에 저장된 아이디와 같은지 체크하는 함수
  const id = document.querySelector("#id").value;
  const savedId = localStorage.getItem(USER_ID);
  if (id === savedId) {
    alert("중복된 아이디입니다");
    document.querySelector("#id").value = "";
  } else {
    alert("사용 가능한 아이디입니다");
    signUpBtn.disabled = false; //비교 후 중복이 아니라면 회원 가입 버튼 활성화
  }
}

// 아이디 중복체크 버튼
checkBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const savedId = localStorage.getItem(USER_ID);
  if (savedId === null) {
    alert("사용 가능한 아이디입니다");
    signUpBtn.disabled = false; // 처음 아이디를 등록할 시
  } else {
    checkId(); // 아니라면 아이디 중복 검사
  }
});

// 2. 비밀번호
function savePassword() {
  // 비밀번호 localStorage에 저장하는 함수
  const password = document.querySelector("#password").value;
  localStorage.setItem(USER_PASSWORD, password);
}

function checkPassword() {
  // 입력한 비밀번호가 규칙에 맞는지 체크하는 함수 <-chatGPT 참고
  const password = document.querySelector("#password").value;
  if (/\s/.test(password) || !regex.test(password)) {
    alert("비밀번호가 유효하지 않습니다. 올바른 비밀번호를 입력해주세요.");
  } else {
    savePassword(); //유효하다면 저장
  }
}

// 3. 비밀번호 확인
function verifyPassword() {
  // 비밀번호와 비밀번호 재입력이 같은지 체크하는 함수
  const password = document.querySelector("#password").value;
  const reEntered = document.querySelector("#verifyPassword").value;
  if (password !== reEntered) {
    alert("비밀번호 재입력 부분을 다시 확인해주세요");
    document.querySelector("#verifyPassword").value = "";
  }
}

// 4. 회원 가입 버튼
signUpBtn.addEventListener("click", (event) => {
  const idLength = document.querySelector("#id").value.length;
  const pwLength = document.querySelector("#password").value.length;
  if (idLength >= 6 && idLength <= 20) {
    // 아이디의 길이 확인
    saveId();
  } else {
    alert("아이디의 길이는 6~20자 이내여야 합니다");
  }
  if (pwLength >= 8 && pwLength <= 20) {
    //비밀번호의 길이 확인
    checkPassword();
  } else {
    alert("비밀번호의 길이는 8~20자 이내여야 합니다");
  }
  verifyPassword();
});
