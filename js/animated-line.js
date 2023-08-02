function animateBackground() {
    const element = document.querySelector('.line-1');
    const step = 1; // Величина смещения фона за каждый кадр (можете изменить по своему усмотрению)

    // Получаем текущее значение background-position или устанавливаем значение по умолчанию, если оно не задано
    let currentPos = parseFloat(getComputedStyle(element).backgroundPositionX) || 0;

    // Функция для обновления фона с новым значением background-position
    function updateBackgroundPosition() {
      currentPos = (currentPos + step) % element.clientWidth;
      element.style.backgroundPositionX = currentPos + 'px';
    }

    // Вызываем функцию обновления фона с определенной частотой
    const animationInterval = setInterval(updateBackgroundPosition, 1000 / 60); // 60 FPS (измените по своему усмотрению)

    // Остановить анимацию после определенного времени (необязательно)
    setTimeout(() => {
      clearInterval(animationInterval);
    }, 10000000); // Здесь анимация остановится через 10 секунд (измените по своему усмотрению)
  }

  // Запускаем анимацию после полной загрузки страницы
  window.addEventListener('load', animateBackground);


  // Функция для анимации движения фонового изображения в обратную сторону
  function animateBackgroundReverse() {
    const element = document.querySelector('.line-2');
    const step = -1; // Величина смещения фона за каждый кадр (отрицательное значение для обратного движения)

    // Получаем текущее значение background-position или устанавливаем значение по умолчанию, если оно не задано
    let currentPos = parseFloat(getComputedStyle(element).backgroundPositionX) || 0;

    // Функция для обновления фона с новым значением background-position
    function updateBackgroundPosition() {
      currentPos = (currentPos + step) % element.clientWidth;
      element.style.backgroundPositionX = currentPos + 'px';
    }

    // Вызываем функцию обновления фона с определенной частотой
    const animationInterval = setInterval(updateBackgroundPosition, 1000 / 60); // 60 FPS (измените по своему усмотрению)

    // Остановить анимацию после определенного времени (необязательно)
    setTimeout(() => {
      clearInterval(animationInterval);
    }, 10000000); // Здесь анимация остановится через 10 секунд (измените по своему усмотрению)
  }

  // Запускаем анимацию после полной загрузки страницы
  window.addEventListener('load', animateBackgroundReverse);