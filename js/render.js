'use strict';
(function () {
  const WIZARDS_COUNT = 4;
  const wizardItemTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  const wizardSimular = document.querySelector('.setup-similar');
  const wizardSimularList = document.querySelector('.setup-similar-list');
  const setupModal = document.querySelector('.setup');

  const renderWizard = function (wizard) {
    let wizardSimularItem = wizardItemTemplate.cloneNode(true);
    wizardSimularItem.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardSimularItem.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    wizardSimularItem.querySelector('.setup-similar-label').textContent = wizard.name;
    return wizardSimularItem;
  };

  const renderWizards = function (wizards) {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < WIZARDS_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    wizardSimularList.innerHTML = '';
    wizardSimularList.appendChild(fragment);
    setupModal.classList.remove('hidden');
    wizardSimular.classList.remove('hidden');
  };

  window.render = renderWizards;
})();
