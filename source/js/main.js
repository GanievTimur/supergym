import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

const videoInit = (selector) => {
  const videos = document.querySelectorAll(selector)

  if(videos.length > 0) {
    videos.forEach(video => {
      videoGenerate(video)
    })
  }
}

const videoGenerate = (video) => {
  const btn = video.querySelector('.gym__video-button')
  const videoID = btn.dataset.videoId
  const container = video.querySelector('.gym__video-wrapper')

  btn.addEventListener('click', () => {
    const iframe = iframeGenerate(videoID)
    container.innerHTML = '';
    container.appendChild(iframe)
  })
}

const iframeGenerate = (videoID) => {
  const iframe = document.createElement('iframe')
  const src =`https://www.youtube.com/embed/${videoID}?rel=0&showinfo=0&autoplay=1&mute=0`

  iframe.setAttribute('src', src)
  iframe.setAttribute('frameborder', '0')
  iframe.setAttribute('allow', 'autoplay')
  iframe.setAttribute('allowfullscreen', '')
  iframe.classList.add('gym__video-content')

  return iframe
}

videoInit('.gym__video')
