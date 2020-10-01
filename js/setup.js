'use strict';

const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURENAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
const FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
const WIZARDS_COUNT = 4;
const setupModal = document.querySelector('.setup');
const wizardSimular = document.querySelector('.setup-similar');
const wizardSimularList = document.querySelector('.setup-similar-list');
const wizardItemTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

const getRandomNumber = function (max) {
  return Math.floor(Math.random() * max);
};

const getRandomElement = function (arr) {
  return arr[getRandomNumber(arr.length)];
};

const getRandomName = function () {
  return getRandomElement(WIZARD_NAMES);
};

const getRandomSurename = function () {
  return getRandomElement(WIZARD_SURENAMES);
};

const getRandomFullname = function () {
  let randomFullname = '';
  let i = getRandomNumber(2);
  if (i === 0) {
    randomFullname = getRandomName() + ' ' + getRandomSurename();
  } else {
    randomFullname = getRandomSurename() + ' ' + getRandomName();
  }
  return randomFullname;
};

const generateWizard = function () {
  return {
    name: getRandomFullname(),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
  };
};

const generateWizards = function (count = WIZARDS_COUNT) {
  let wizards = [];
  for (let i = 0; i < count; i++) {
    wizards.push(generateWizard());
  }
  return wizards;
};

const renderWizard = function (wizard) {
  let wizardSimularItem = wizardItemTemplate.cloneNode(true);
  wizardSimularItem.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardSimularItem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardSimularItem.querySelector('.setup-similar-label').textContent = wizard.name;
  return wizardSimularItem;
};

const renderWizards = function (wizards) {
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  wizardSimularList.appendChild(fragment);
};

const wizards = generateWizards();
renderWizards(wizards);

wizardSimular.classList.remove('hidden');
// setupModal.classList.remove('hidden');

const setupOpen = document.querySelector('.setup-open');
const setupClose = document.querySelector('.setup-close');

const onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    setupModal.classList.add('hidden');
  }
};

const openPopup = function () {
  setupModal.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

const closePopup = function () {
  setupModal.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    evt.preventDefault();
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    evt.preventDefault();
    closePopup();
  }
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

const coat = setupWizardForm.querySelector('.setup-wizard .wizard-coat');

coat.addEventListener('click', function () {
  let input = setupWizardForm.querySelector('input[name="coat-color"]');
  coat.style.fill = getRandomElement(COAT_COLORS);
  input.value = coat.style.fill;
});

const eyes = setupWizardForm.querySelector('.setup-wizard .wizard-eyes');

eyes.addEventListener('click', function () {
  let input = setupWizardForm.querySelector('input[name="eyes-color"]');
  eyes.style.fill = getRandomElement(EYES_COLORS);
  input.value = eyes.style.fill;
});

const fireball = setupWizardForm.querySelector('.setup-fireball-wrap');

fireball.addEventListener('click', function () {
  let input = setupWizardForm.querySelector('input[name="fireball-color"]');
  let randomColor = getRandomElement(FIREBALL_COLORS);
  fireball.style.background = randomColor;
  input.value = randomColor;
});

