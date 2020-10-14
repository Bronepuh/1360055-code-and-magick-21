'use strict';
(function () {

  window.util = {
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
    }
  };
})();
