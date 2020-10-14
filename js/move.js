'use strict';

(function () {
  const dialogHandle = window.setup.setupModal.querySelector('.upload');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    let startCords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let dragged = false;

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      const shift = {
        x: startCords.x - moveEvt.clientX,
        y: startCords.y - moveEvt.clientY
      };

      window.setup.setupModal.style.top = (window.setup.setupModal.offsetTop - shift.y) + 'px';
      window.setup.setupModal.style.left = (window.setup.setupModal.offsetLeft - shift.x) + 'px';

      startCords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        const onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();


