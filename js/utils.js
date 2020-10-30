'use strict';
(function () {
  const getRandomElement = function (array) {
    const randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  window.utils = {
    isEscEvent: function (evt, action) {
      evt.preventDefault();
      if (evt.key === 'Escape') {
        action();
      }
    },

    isEnterEvent: function (evt, action) {
      evt.preventDefault();
      if (evt.key === 'Enter') {
        action();
      }
    },

    getRandomElement: getRandomElement,
  };
})();
