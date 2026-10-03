let beforePos = 0;

// ハンバーガーを表示
function showHamburger() {
  $('.hamburger')
    .css({
      display: 'block',
      opacity: 1,
      pointerEvents: 'auto'
    })
    .addClass('DownMove')
    .removeClass('UpMove');
}

// ハンバーガーを非表示
function hideHamburger() {
  $('.hamburger')
    .addClass('UpMove')
    .removeClass('DownMove');

  setTimeout(function () {
    if (
      $('.hamburger').hasClass('UpMove') &&
      !window.matchMedia('(max-width: 767px)').matches
    ) {
      $('.hamburger').css('display', 'none');
    }
  }, 500);
}

// スクロール時のナビ・ハンバーガー制御
function scrollAnime() {
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();
  const isMobile = window.matchMedia('(max-width: 767px)').matches;

  // スマホではハンバーガーを常時表示
  if (isMobile) {
    $('.nav').removeClass('DownMove UpMove');
    showHamburger();
    beforePos = scrollTop;
    return;
  }

  // PC：下方向へスクロール
  if (scrollTop > windowHeight / 2 && scrollTop > beforePos) {
    $('.nav')
      .addClass('UpMove')
      .removeClass('DownMove');

    showHamburger();
  } else {
    // PC：上方向またはページ上部
    $('.nav')
      .addClass('DownMove')
      .removeClass('UpMove');

    hideHamburger();

    $('.menu').removeClass('open');
    $('.hamburger').removeClass('active');
  }

  beforePos = scrollTop;
}

$(function () {
  // ハンバーガーメニュー
  $('.hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('open');
  });

});

// ロード・スクロール・リサイズ時
$(window).on('load scroll resize', function () {
  scrollAnime();
});


document.addEventListener('DOMContentLoaded', () => {

  // スマホでは実行しない
  if (window.matchMedia('(max-width: 600px)').matches) return;

  const nav = document.querySelector('.fv_nav');
  const links = [...document.querySelectorAll('.fv_nav a')];

  if (!nav || links.length === 0) return;

  let wheelLock = false;

nav.addEventListener('wheel', (e) => {
  e.preventDefault();

  if (wheelLock) return;

  const itemHeight = 4 * parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );

  const currentIndex = Math.round(nav.scrollTop / itemHeight);

  let nextIndex = currentIndex;

  if (e.deltaY > 0) {
    nextIndex = Math.min(currentIndex + 1, links.length - 1);
  } else if (e.deltaY < 0) {
    nextIndex = Math.max(currentIndex - 1, 0);
  }

  if (nextIndex === currentIndex) return;

  wheelLock = true;

  nav.scrollTo({
    top: nextIndex * itemHeight,
    behavior: 'smooth'
  });

  setTimeout(() => {
    wheelLock = false;
  }, 400);

}, { passive: false });

  function updateActiveLink() {
    const navRect = nav.getBoundingClientRect();
    const navCenter = navRect.top + navRect.height / 2;

    let closestLink = links[0];
    let closestDistance = Infinity;

    links.forEach((link) => {
      const linkRect = link.getBoundingClientRect();
      const linkCenter = linkRect.top + linkRect.height / 2;
      const distance = Math.abs(navCenter - linkCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestLink = link;
      }
    });

    links.forEach((link) => {
      link.classList.toggle('active', link === closestLink);
    });
  }

  nav.addEventListener('scroll', () => {
    requestAnimationFrame(updateActiveLink);
  });

  window.addEventListener('resize', updateActiveLink);

  updateActiveLink();


});