'use strict';
(function () {
  const COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  const EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  const FIREBALL_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  const setupModal = document.querySelector('.setup');
  const setupWizardForm = setupModal.querySelector('.setup-wizard-form');

  let wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  const coat = setupWizardForm.querySelector('.setup-wizard .wizard-coat');

  coat.addEventListener('click', function () {
    let input = setupWizardForm.querySelector('input[name="coat-color"]');
    const newColor = window.utils.getRandomElement(COAT_COLORS);
    input.value = newColor;
    wizard.onCoatChange(newColor);
  });

  const eyes = setupWizardForm.querySelector('.setup-wizard .wizard-eyes');

  eyes.addEventListener('click', function () {
    let input = setupWizardForm.querySelector('input[name="eyes-color"]');
    const newColor = window.utils.getRandomElement(EYES_COLORS);
    input.value = newColor;
    wizard.onEyesChange(newColor);
  });

  const fireball = setupWizardForm.querySelector('.setup-fireball-wrap');

  fireball.addEventListener('click', function () {
    let input = setupWizardForm.querySelector('input[name="fireball-color"]');
    let randomColor = window.utils.getRandomElement(FIREBALL_COLORS);
    fireball.style.background = randomColor;
    input.value = randomColor;
  });

  window.wizard = {
    setCoatChangeHandler: function (cb) {
      wizard.onCoatChange = cb;
    },

    setEyesChangeHandler: function (cb) {
      wizard.onEyesChange = cb;
    }
  };

})();
