// --- 設定ここだけ ---
const validPasswords = ["00092", "00442", "00373", "00555", "00278"]; // 正しいパスワードリスト
const cookieName = "allowed=true";  // Cookie名
// --------------------

// パスワード確認処理
function checkPassword() {
  const input = document.getElementById('passwordInput').value;

  if (validPasswords.includes(input)) {
    // 正しい → Cookie発行して main.html へ移動
    const expireDate = new Date();
    expireDate.setTime(expireDate.getTime() + (24 * 60 * 60 * 1000)); // 24時間後
    document.cookie = cookieName + "; path=/howto_ai_product_navi/; expires=" + expireDate.toUTCString();
    window.location.href = "main.html";
  } else {
    // 間違い → エラー表示
    document.getElementById('errorMessage').innerText = "パスワードが違います。";
  }
}
