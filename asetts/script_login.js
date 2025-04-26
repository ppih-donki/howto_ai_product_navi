// --- 設定ここだけ ---
const validPasswords = ["00092", "00442", "00373", "00555", "00278"]; // 正しいパスワードリスト
const cookieName = "allowed=true";  // Cookie名
// --------------------

// ▼【追加する関数】従業員コードをGoogleフォームに送る
function sendEmployeeCode() {
  const employeeCode = document.getElementById('employeeCode').value;

  if (!employeeCode) return; // 空欄なら送らない

  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSepfdsb9S7xAfQaHWI1jjJ-X5gcEEQNeYmGEOkmBzPMq2wuKg/formResponse"; 
  const formData = new FormData();
  formData.append("entry.2095396589", employeeCode);

  fetch(formUrl, {
    method: "POST",
    mode: "no-cors",
    body: formData
  }).then(response => {
    console.log("従業員コード送信完了");
  }).catch(error => {
    console.error("送信エラー:", error);
  });
}

// ▼【パスワードチェック】の中で、最初に呼び出す
function checkPassword() {
  sendEmployeeCode(); // ←ここで従業員コード送信！

  const input = document.getElementById('passwordInput').value;

  if (validPasswords.includes(input)) {
    const expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + (24 * 60 * 60 * 1000)); // 24時間後
    document.cookie = cookieName + "; path=/howto_ai_product_navi/; expires=" + expireDate.toUTCString();
    window.location.href = "main.html";
  } else {
    document.getElementById('errorMessage').innerText = "パスワードが違います。";
  }
}
