// --- 設定ここだけ ---
const validPasswords = ["00092", "secret442", "00373", "00555", "00278"]; // 正しいパスワードリスト
const cookieName = "allowed=true";  // Cookie名
// --------------------

// パスワード確認処理
function checkPassword() {
  const input = document.getElementById('passwordInput').value;

  if (validPasswords.includes(input)) {
    // 正しい → Cookie発行して main.html へ移動
    document.cookie = cookieName + "; path=/";
    window.location.href = "main.html";
  } else {
    // 間違い → エラー表示
    document.getElementById('errorMessage').innerText = "パスワードが違います。";
  }
}
