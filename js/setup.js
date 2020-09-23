'use strict';

let getRandomI = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

let userPanel = document.querySelector('.setup');

let wizardSimular = document.querySelector('.setup-similar');
wizardSimular.classList.remove('hidden');
let wizardSimularList = document.querySelector('.setup-similar-list');
let wizardItemTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

let WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
let WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

let getRandomName = function () {
  return WIZARD_NAMES[getRandomI(WIZARD_NAMES.length)];
};

let getRandomSurename = function () {
  return WIZARD_SURNAMES[getRandomI(WIZARD_SURNAMES.length)];
};

let getRandomFullname = function () {
  let randomFullname = '';
  let i = getRandomI(2);
  if (i === 0) {
    randomFullname = getRandomName() + ' ' + getRandomSurename();
  } else {
    randomFullname = getRandomSurename() + ' ' + getRandomName();
  }
  return randomFullname;
};

let COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
let getRandomCoat = function () {
  return COAT_COLORS[getRandomI(COAT_COLORS.length)];
};

let EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
let getRandomEyes = function () {
  return EYES_COLORS[getRandomI(EYES_COLORS.length)];
};

let wizards = [
  {
    name: getRandomFullname(),
    coatColor: getRandomCoat(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomFullname(),
    coatColor: getRandomCoat(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomFullname(),
    coatColor: getRandomCoat(),
    eyesColor: getRandomEyes()
  },
  {
    name: getRandomFullname(),
    coatColor: getRandomCoat(),
    eyesColor: getRandomEyes()
  }
];

let renderWizard = function (wizard) {
  let wizardSimularItem = wizardItemTemplate.cloneNode(true);

  wizardSimularItem.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  wizardSimularItem.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  wizardSimularItem.querySelector('.setup-similar-label').textContent = wizard.name;

  return wizardSimularItem;
};

let fragment = document.createDocumentFragment();

for (let i = 0; i < wizards.length; i++) {

  fragment.appendChild(renderWizard(wizards[i]));
}

wizardSimularList.appendChild(fragment);

userPanel.classList.remove('hidden');


