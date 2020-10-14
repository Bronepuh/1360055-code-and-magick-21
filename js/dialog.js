'use strict';
(function () {
  const setupOpen = document.querySelector('.setup-open');
  const setupClose = document.querySelector('.setup-close');

  const onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  const openPopup = function () {
    window.setup.setupModal.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  const closePopup = function () {
    window.setup.setupModal.classList.add('hidden');
    window.setup.setupModal.style.top = '80px';
    window.setup.setupModal.style.left = '50%';
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  const setupWizardForm = window.setup.setupModal.querySelector('.setup-wizard-form');

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

  const coat = setupWizardForm.querySelector('.setup-wizard .wizard-coat');

  coat.addEventListener('click', function () {
    let input = setupWizardForm.querySelector('input[name="coat-color"]');
    coat.style.fill = window.setup.getRandomElement(window.setup.coatColors);
    input.value = coat.style.fill;
  });

  const eyes = setupWizardForm.querySelector('.setup-wizard .wizard-eyes');

  eyes.addEventListener('click', function () {
    let input = setupWizardForm.querySelector('input[name="eyes-color"]');
    eyes.style.fill = window.setup.getRandomElement(window.setup.eyesColors);
    input.value = eyes.style.fill;
  });

  const fireball = setupWizardForm.querySelector('.setup-fireball-wrap');

  fireball.addEventListener('click', function () {
    let input = setupWizardForm.querySelector('input[name="fireball-color"]');
    let randomColor = window.setup.getRandomElement(window.setup.fireballColors);
    fireball.style.background = randomColor;
    input.value = randomColor;
  });
})();

