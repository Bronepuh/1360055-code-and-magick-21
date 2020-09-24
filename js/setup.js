'use strict';

let WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
let WIZARD_SURENAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
let COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
let EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
let setupModal = document.querySelector('.setup');
let wizardSimular = document.querySelector('.setup-similar');
wizardSimular.classList.remove('hidden');
let wizardSimularList = document.querySelector('.setup-similar-list');
let wizardItemTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

let getRandomNumber = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

let getRandomElement = function (arr) {
  return arr[getRandomNumber(arr.length)];
};

let getRandomName = function () {
  return getRandomElement(WIZARD_NAMES);
};

let getRandomSurename = function () {
  return getRandomElement(WIZARD_SURENAMES);
};

let getRandomFullname = function () {
  let randomFullname = '';
  let i = getRandomNumber(2);
  if (i === 0) {
    randomFullname = getRandomName() + ' ' + getRandomSurename();
  } else {
    randomFullname = getRandomSurename() + ' ' + getRandomName();
  }
  return randomFullname;
};

let wizards = [];

let newWizard = function () {
  let wizard = Object.create({}, {
    name: {
      get() {
        return getRandomFullname();
      },
    },
    coatColor: {
      get() {
        return getRandomElement(COAT_COLORS);
      }
    },
    eyesColor: {
      get() {
        return getRandomElement(EYES_COLORS);
      }
    }
  }
  );
  wizards.push(wizard);
};

for (let i = 0; i < 4; i++) {
  newWizard();
}

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

setupModal.classList.remove('hidden');
