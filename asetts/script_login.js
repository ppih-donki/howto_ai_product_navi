// --- 設定ここだけ ---
const validPasswords = ["00092", "00442", "00373", "00555", "00278"]; // 正しいパスワードリスト
const cookieName = "allowed=true";  // Cookie名
// --------------------

// ▼【追加する関数】従業員コードと店番をGoogleフォームに送る
function sendEmployeeCodeAndStoreCode() {
  const employeeCode = document.getElementById('employeeCode').value;
  const storeCode = document.getElementById('storeCode').value;

  if (!employeeCode || !storeCode) return; // 空欄なら送らない

  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSepfdsb9S7xAfQaHWI1jjJ-X5gcEEQNeYmGEOkmBzPMq2wuKg/formResponse";
  const formData = new FormData();
  formData.append("entry.1258640469", employeeCode); // 従業員コード
  formData.append("entry.551096572", storeCode);     // 店番コード

  fetch(formUrl, {
    method: "POST",
    mode: "no-cors",
    body: formData
  }).then(response => {
    console.log("従業員コードと店番送信完了");
  }).catch(error => {
    console.error("送信エラー:", error);
  });
}

// ▼【パスワードチェック】の中で、最初に呼び出す
function checkPassword() {
  sendEmployeeCodeAndStoreCode(); // ←ここで両方送信！

  const input = document.getElementById('passwordInput').value;

  if (validPasswords.includes(input)) {
    const expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + (24 * 60 * 60 * 1000)); //*
