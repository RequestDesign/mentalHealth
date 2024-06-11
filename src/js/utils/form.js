import './forms';
import { formFieldsInit, formSubmit } from './forms';
import 'inputmask';
const form = () => {
  // form fields
  formFieldsInit({ viewPass: true });

  // submit form
  formSubmit();
  nameValidate();
  phoneMask();
  dateMask();
  telValidate();
  mailValidate();
  inputPlaceholder();
  inputFile();

  function inputPlaceholder() {
    $('input')
      .not('[type="file"]')
      .focus(function () {
        $(this).next().hide();
      });

    $('input')
      .not('[type="file"]')
      .blur(function () {
        if ($(this).val().trim() === '') {
          $(this).next().show(); // Используем метод next() вместо nextElementSibling
        }
      });
  }
  function nameValidate() {
    const name = document.querySelectorAll('.input--name');
    name.forEach((item) => {
      item.addEventListener('input', () => {
        const inputValue = item.value.trim();
        const span = item.parentElement.nextElementSibling;
        const parent = item.parentElement.parentElement;

        if (!/^[a-zA-Zа-яА-Я\s\-]+$/.test(inputValue) || inputValue == '') {
          span.classList.add('active');
          parent.classList.add('_form-error');
        } else {
          span.classList.remove('active');
          parent.classList.remove('_form-error');
        }
      });
      item.addEventListener('blur', () => {
        const inputValue = item.value.trim();
        const span = item.parentElement.nextElementSibling;
        const parent = item.parentElement.parentElement;

        if (!/^[a-zA-Zа-яА-Я\s\-]+$/.test(inputValue) || inputValue == '') {
          span.classList.add('active');
          parent.classList.add('_form-error');
        } else {
          span.classList.remove('active');
          parent.classList.remove('_form-error');
        }
      });
    });
  }
  function phoneMask() {
    const mask = new Inputmask('+7 (999) 999-99-99');
    mask.mask($('.phone-mask'));
  }
  function dateMask() {
    const mask = new Inputmask('99.99.9999г');
    mask.mask($('.input--date'));
  }
  function telValidate() {
    const tel = document.querySelectorAll('.input--tel');

    tel.forEach((item) => {
      item.addEventListener('input', () => {
        const inputValue = item.value.trim();
        const span = item.parentElement.nextElementSibling;
        const parent = item.parentElement.parentElement;

        if (!/^\+\d{1} \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(inputValue) && inputValue != '') {
          // span.classList.add('active');
          parent.classList.add('_form-error');
        } else if (inputValue.length < 16) {
          parent.classList.add('_form-error');
        } else {
          // span.classList.remove('active');
          parent.classList.remove('_form-error');
        }
      });
    });
  }
  function mailValidate() {
    const mail = document.querySelectorAll('.input--mail');

    mail.forEach((item) => {
      item.addEventListener('input', () => {
        const inputValue = item.value.trim();
        const span = item.parentElement.nextElementSibling;
        const parent = item.parentElement.parentElement;

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(inputValue) && inputValue != '') {
          // span.classList.add('active');
          parent.classList.add('_form-error');
        } else {
          // span.classList.remove('active');
          parent.classList.remove('_form-error');
        }
      });
    });
  }
  function inputFile() {
    function formatFileSize(bytes) {
      if (bytes < 1024) return bytes + ' b';
      else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' kb';
      else return (bytes / 1048576).toFixed(1) + ' mb';
    }

    let arr = [];

    $('.label-input-file input[type=file]').on('change', function () {
      const filesItems = $('body').find('.popup__form-files-items.' + $(this).attr('name'));

      if (filesItems.length > 0) {
        let files = Array.from(this.files);
        const main = $(this).attr('name');
        let newArr = arr.find((x) => x.name === main);
        if (newArr) {
          arr.map((x) => {
            if (x.name == main) {
              files.forEach((i) => {
                if (i.size < 20 * 1024 * 1024) {
                  // Проверка размера файла
                  x.file.push(i);
                }
              });
            }
          });
        } else {
          let asd = [];
          files.forEach((i) => {
            if (i.size < 20 * 1024 * 1024) {
              // Проверка размера файла
              asd.push(i);
            }
          });
          arr.push({
            name: main,
            file: asd
          });
        }
        console.log(arr);
        $.each(files, function (index, file) {
          if (file.size < 20 * 1024 * 1024) {
            // Проверка на вес меньше 20 МБ
            filesItems.append(
              `<div class="popup__form-files-item form-files-item">
                    <a target="_blank" href="${window.URL.createObjectURL(file)}">  
                      ${file.name}
                      ${formatFileSize(file.size)}
                    </a>
                    <button type="button" class="removeBtn">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M28 4L4 28" stroke="#191817" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M4 4L28 28" stroke="#191817" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </button>
               </div>`
            );
          } else {
            alert('Вес файла превышает 20mb');
          }
        });
      }
    });

    $(document).on('click', '.removeBtn', function () {
      let fileName = $(this).prev('span').text();
      let thisClass = $(this).parent().parent().attr('class').split(' ');
      let input = $('body').find('input[name=' + thisClass[thisClass.length - 1] + ']');
      let dataTransfer = new DataTransfer();
      Array.from(input[0].files).forEach((file) => {
        if (file.name !== fileName) {
          dataTransfer.items.add(file);
        }
      });
      input[0].files = dataTransfer.files;

      let parent = $(this).parent();
      $(this)
        .parent()
        .parent()
        .find('.popup__form-files-item')
        .each(function (i) {
          if ($(this).is(parent)) {
            arr.map((x) => {
              if (x.name == thisClass[thisClass.length - 1]) {
                x.file.splice(i, 1);
              }
            });
          }
        });
      console.log(arr);
      $(this).parent().remove();
    });
  }
  function setupFormListener(formSelector, submitButtonSelector) {
    const form = document.querySelector(formSelector);
    const submitButton = document.querySelector(submitButtonSelector);

    const formElements = form.querySelectorAll('input[data-required], textarea[data-required]');

    const formElementCheckbox = form.querySelectorAll('.popup__input-checkbox');
    const formElementsParents = form.querySelectorAll('.input-group');

    function updateSubmitButtonState() {
      const isEmpty = Array.from(formElements).some((element) => {
        return element.value.trim() === '';
      });
      const formError = Array.from(formElementsParents).some((element) => {
        return element.classList.contains('_form-error');
      });

      const formErrorCheckbox = Array.from(formElementCheckbox).some((element) => {
        return !element.checked;
      });

      if (isEmpty || formError || formErrorCheckbox) {
        submitButton.setAttribute('disabled', 'disabled');
      } else {
        submitButton.removeAttribute('disabled');
      }
    }

    formElements.forEach((element) => {
      element.addEventListener('input', updateSubmitButtonState);
    });

    updateSubmitButtonState();
  }

  setupFormListener('.application__form', '.application__btn');
  setupFormListener('.application__summary-form', '.application__summary-btn');
  setupFormListener('.application__demo-form', '.application__demo-btn');
  setupFormListener('.popup__form--application', '.popup__btn--application');
  setupFormListener('.popup__form--choice', '.popup__btn--choice');
  setupFormListener('.popup__form--demo', '.popup__btn--demo');
  setupFormListener('.popup__form--summary', '.popup__btn--summary');
};

export default form;
