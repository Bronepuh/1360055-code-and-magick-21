'use strict';
(function () {
  // const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // const WIZARD_SURENAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  // const COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  // const EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  const WIZARDS_COUNT = 4;
  const wizardSimular = document.querySelector('.setup-similar');
  const wizardSimularList = document.querySelector('.setup-similar-list');
  const wizardItemTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  const setupModal = document.querySelector('.setup');
  const setupWizardForm = document.querySelector('.setup-wizard-form');

  const getRandomNumber = function (max) {
    return Math.floor(Math.random() * max);
  };

  const getRandomElement = function (arr) {
    return arr[getRandomNumber(arr.length)];
  };

  // const getRandomName = function () {
  //   return getRandomElement(WIZARD_NAMES);
  // };

  // const getRandomSurename = function () {
  //   return getRandomElement(WIZARD_SURENAMES);
  // };

  // const getRandomFullname = function () {
  //   let randomFullname = '';
  //   let i = getRandomNumber(2);
  //   if (i === 0) {
  //     randomFullname = getRandomName() + ' ' + getRandomSurename();
  //   } else {
  //     randomFullname = getRandomSurename() + ' ' + getRandomName();
  //   }
  //   return randomFullname;
  // };

  // const generateWizard = function () {
  //   return {
  //     name: getRandomFullname(),
  //     coatColor: getRandomElement(COAT_COLORS),
  //     eyesColor: getRandomElement(EYES_COLORS)
  //   };
  // };

  // const generateWizards = function (count = WIZARDS_COUNT) {
  //   let wizards = [];
  //   for (let i = 0; i < count; i++) {
  //     wizards.push(generateWizard());
  //   }
  //   return wizards;
  // };

  const renderWizard = function (wizard) {
    let wizardSimularItem = wizardItemTemplate.cloneNode(true);
    wizardSimularItem.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardSimularItem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    wizardSimularItem.querySelector('.setup-similar-label').textContent = wizard.name;
    return wizardSimularItem;
  };

  // const renderWizards = function (wizards) {
  //   let fragment = document.createDocumentFragment();

  //   for (let i = 0; i < wizards.length; i++) {
  //     fragment.appendChild(renderWizard(wizards[i]));
  //   }

  //   wizardSimularList.appendChild(fragment);
  // };

  // const wizards = generateWizards();
  // renderWizards(wizards);

  const successHandler = function (wizards) {
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < WIZARDS_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    wizardSimularList.appendChild(fragment);

    setupModal.classList.remove('hidden');
    wizardSimular.classList.remove('hidden');
  };

  // window.backend.load(function (wizards) {
  //   let fragment = document.createDocumentFragment();

  //   for (let i = 0; i < WIZARDS_COUNT; i++) {
  //     fragment.appendChild(renderWizard(wizards[i]));
  //   }
  //   wizardSimularList.appendChild(fragment);

  //   setupModal.classList.remove('hidden');
  //   wizardSimular.classList.remove('hidden');
  // }, function() {});

  const errorHandler = function (errorMessage) {
    const node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  window.setup = {
    setupModal: setupModal,
    wizardForm: setupWizardForm,
    fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
    getRandomNumber: getRandomNumber,
    getRandomElement: getRandomElement,
  };
})();
