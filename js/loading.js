// 最低表示時間（ミリ秒）
const MIN_DURATION = 3000;

// ① ページ読み込み開始時刻を記録
const preloadStart = Date.now();

// ② loaded を一度だけ付けるセーフ関数
let done = false;
function finishPreload() {
  if (done) return;
  done = true;
  document.body.classList.add('loaded');
}

// ③ window.load 後に、経過時間を見て最小時間まで待つ
window.addEventListener('load', () => {
  const elapsed = Date.now() - preloadStart;
  const remain = Math.max(0, MIN_DURATION - elapsed);
  setTimeout(finishPreload, remain);
});

// ④ 万一の保険：極端に重い時でも 10 秒で必ず閉じる
setTimeout(finishPreload, 10000);
