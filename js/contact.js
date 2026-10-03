// js/contact.js

// フォーム要素の取得
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// ページ読み込み時に保存された値を入力欄に復元
window.addEventListener('DOMContentLoaded', () => {
  nameInput.value = sessionStorage.getItem('name') || '';
  emailInput.value = sessionStorage.getItem('email') || '';
  messageInput.value = sessionStorage.getItem('message') || '';
});

// フォーム送信時に入力内容をセッションストレージに保存
form.addEventListener('submit', () => {
  sessionStorage.setItem('name', nameInput.value);
  sessionStorage.setItem('email', emailInput.value);
  sessionStorage.setItem('message', messageInput.value);
});
