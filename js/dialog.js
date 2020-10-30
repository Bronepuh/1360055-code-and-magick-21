'use strict';
(function () {
  const setupModal = document.querySelector('.setup');
  const setupOpen = document.querySelector('.setup-open');
  const setupClose = document.querySelector('.setup-close');

  const onPopupEscPress = function (evt) {
    window.utils.isEscEvent(evt, closePopup);
  };

  const openPopup = function () {
    setupModal.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  const closePopup = function () {
    setupModal.classList.add('hidden');
    setupModal.style.top = '80px';
    setupModal.style.left = '50%';
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.utils.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.utils.isEnterEvent(evt, closePopup);
  });

  const setupWizardForm = setupModal.querySelector('.setup-wizard-form');

  const userNameInput = setupWizardForm.querySelector('.setup-user-name');

  userNameInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  userNameInput.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  setupModal.classList.remove('hidden');

  setupWizardForm.addEventListener('submit', function (evt) {

    window.backend.save(new FormData(setupWizardForm), function () {
      setupModal.classList.add('hidden');
    });
    evt.preventDefault();

  });
})();

