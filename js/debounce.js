'use strict';
(function () {

  const DEBOUNCE_INTERVAL = 500; // ms

  var lastTimeout;
  window.debounce = function (cb) {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(cb, DEBOUNCE_INTERVAL);
  };

})();