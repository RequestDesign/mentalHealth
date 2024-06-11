import { modules } from '../dev/kuloverova';
/**
 * adds actions to form fields
 * @param {object} options object
 */
export function formFieldsInit(options = { viewPass: false }) {
  const formFields = document.querySelectorAll('input[placeholder],textarea[placeholder]');
  if (formFields.length) {
    formFields.forEach((formField) => {
      if (!formField.hasAttribute('data-placeholder-nohide')) {
        formField.dataset.placeholder = formField.placeholder;
      }
    });
  }
  document.body.addEventListener('focusin', function (e) {
    const targetElement = e.target;
    if (
      (targetElement.tagName === 'INPUT' &&
        targetElement.type !== 'file' &&
        targetElement.type !== 'range' &&
        targetElement.type !== 'checkbox' &&
        targetElement.type !== 'radio' &&
        !targetElement.closest('.quantity') &&
        !targetElement.closest('.input-row')) ||
      targetElement.tagName === 'TEXTAREA'
    ) {
      if (targetElement.dataset.placeholder) {
        targetElement.placeholder = '';
      }
      if (!targetElement.hasAttribute('data-no-focus-classes')) {
        targetElement.classList.add('_form-focus');
        targetElement.parentElement.classList.add('_form-focus');
      }
      if (targetElement.closest('.input')) {
        targetElement.closest('.input').classList.remove('_filled');
      }
      formValidate.removeError(targetElement);
    }
  });
  document.body.addEventListener('focusout', function (e) {
    const targetElement = e.target;
    if (
      (targetElement.tagName === 'INPUT' &&
        targetElement.type !== 'file' &&
        targetElement.type !== 'checkbox' &&
        targetElement.type !== 'radio' &&
        !targetElement.closest('.quantity') &&
        !targetElement.closest('.input-row')) ||
      targetElement.tagName === 'TEXTAREA'
    ) {
      if (targetElement.dataset.placeholder) {
        targetElement.placeholder = targetElement.dataset.placeholder;
      }
      if (!targetElement.hasAttribute('data-no-focus-classes')) {
        targetElement.classList.remove('_form-focus');
        targetElement.parentElement.classList.remove('_form-focus');
      }
      if (targetElement.hasAttribute('data-validate')) {
        formValidate.validateInput(targetElement);
      }
      if (!targetElement.classList.contains('_form-error') && targetElement.value.trim()) {
        if (targetElement.closest('.input')) {
          targetElement.closest('.input').classList.add('_filled');
        }
      } else {
        if (targetElement.closest('.input')) {
          targetElement.closest('.input').classList.remove('_filled');
        }
      }
    }
  });

  if (options.viewPass) {
    document.addEventListener('click', function (e) {
      let targetElement = e.target;
      if (targetElement.closest('[class*="__viewpass"]')) {
        let inputType = targetElement.classList.contains('_viewpass-active') ? 'password' : 'text';
        targetElement.parentElement.querySelector('input').setAttribute('type', inputType);
        targetElement.classList.toggle('_viewpass-active');
      }
    });
  }
}

// validation var
export let formValidate = {
  getErrors(form) {
    let error = 0;
    let formRequiredItems = form.querySelectorAll('*[data-required]');
    if (formRequiredItems.length) {
      formRequiredItems.forEach((formRequiredItem) => {
        if (
          (formRequiredItem.offsetParent !== null || formRequiredItem.tagName === 'SELECT') &&
          !formRequiredItem.disabled
        ) {
          error += this.validateInput(formRequiredItem);
        }
      });
    }
    return error;
  },
  validateInput(formRequiredItem) {
    let error = 0;
    if (formRequiredItem.dataset.required === 'email') {
      formRequiredItem.value = formRequiredItem.value.replace(' ', '');
      if (this.emailTest(formRequiredItem)) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    } else if (formRequiredItem.dataset.required === 'tel') {
      // formRequiredItem.value = formRequiredItem.value.replace(/[^0-9]/g, ''); // Оставить только цифры и символы +()
      if (!/^\+\d{1} \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(formRequiredItem.value)) {

        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    } else if (formRequiredItem.dataset.required === 'code') {
      // formRequiredItem.value = formRequiredItem.value.replace(/[^0-9]/g, ''); // Оставить только цифры и символы +()
      if (!/^\d{3} \d{3}$/.test(formRequiredItem.value)) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    }else if (formRequiredItem.dataset.required === 'dropdown') {
      if (!formRequiredItem.classList.contains('filled')) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    } else if (formRequiredItem.dataset.required === 'file') {
      if (formRequiredItem.files.length === 0) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    } else if (formRequiredItem.dataset.required === 'name') {
      if (!/^[a-zA-Zа-яА-Я\s\-]+$/.test(formRequiredItem.value)) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    } else {
      if (!formRequiredItem.value.trim()) {
        this.addError(formRequiredItem);
        error++;
      } else {
        this.removeError(formRequiredItem);
      }
    }
    return error;
  },
  addError(formRequiredItem) {
    formRequiredItem.classList.add('_form-error');
    formRequiredItem.parentElement.classList.add('_form-error');
    const error = formRequiredItem.parentElement.parentElement.querySelector('.error-span');
    if (error) {
      error.classList.add('active');
    }
    let inputError = formRequiredItem.parentElement.querySelector('.form__error');
    if (inputError) formRequiredItem.parentElement.removeChild(inputError);
    if (formRequiredItem.dataset.error) {
      formRequiredItem.parentElement.insertAdjacentHTML(
        'beforeend',
        `<div class="form__error">${formRequiredItem.dataset.error}</div>`
      );
    }
  },
  removeError(formRequiredItem) {
    formRequiredItem.classList.remove('_form-error');
    formRequiredItem.parentElement.classList.remove('_form-error');
    const error = formRequiredItem.parentElement.parentElement.querySelector('.error-span');
    if (error) {
      error.classList.remove('active');
    }
    if (formRequiredItem.parentElement.querySelector('.form__error')) {
      formRequiredItem.parentElement.removeChild(
        formRequiredItem.parentElement.querySelector('.form__error')
      );
    }
  },
  formClean(form) {
    form.reset();
    setTimeout(() => {
      let inputs = form.querySelectorAll('input,textarea');
      for (let index = 0; index < inputs.length; index++) {
        const el = inputs[index];
        el.parentElement.classList.remove('_form-focus');
        el.classList.remove('_form-focus');
        formValidate.removeError(el);
      }
      let checkboxes = form.querySelectorAll('.checkbox__input');
      if (checkboxes.length > 0) {
        for (let index = 0; index < checkboxes.length; index++) {
          const checkbox = checkboxes[index];
          checkbox.checked = false;
        }
      }
      // if (modules.select) {
      //     let selects = form.querySelectorAll('.select');
      //     if (selects.length) {
      //         for (let index = 0; index < selects.length; index++) {
      //             const select = selects[index].querySelector('select');
      //             modules.select.selectBuild(select);
      //         }
      //     }
      // }
    }, 0);
  },
  emailTest(formRequiredItem) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
  }
};

/**
 * adds submit logic
 * @param {object} options object
 */
export function formSubmit(options = { validate: true }) {
  const forms = document.forms;
  if (forms.length) {
    for (const form of forms) {
      form.addEventListener('submit', function (e) {
        const form = e.target;
        formSubmitAction(form, e);
      });
      form.addEventListener('reset', function (e) {
        const form = e.target;
        formValidate.formClean(form);
      });
    }
  }
  async function formSubmitAction(form, e) {
    const error = !form.hasAttribute('data-no-validate') ? formValidate.getErrors(form) : 0;
    if (error === 0) {
      const ajax = form.hasAttribute('data-ajax');
      if (ajax) {
        e.preventDefault();
        const formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
        const formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
        const formData = new FormData(form);

        form.classList.add('_sending');
        const response = await fetch(formAction, {
          method: formMethod,
          body: formData
        });
        if (response.ok) {
          let responseResult = await response.json();
          form.classList.remove('_sending');
          formSent(form, responseResult);
        } else {
          alert('error');
          form.classList.remove('_sending');
        }
      } else if (form.hasAttribute('data-dev')) {
        // in development mode
        e.preventDefault();
        formSent(form);
      }
    } else {
      e.preventDefault();
      const formError = form.querySelector('._form-error');
      if (formError && form.hasAttribute('data-goto-error')) {
        gotoBlock(formError, true, 1000);
      }
    }
  }
  // actions after submitting the form
  function formSent(form, responseResult = ``) {
    document.dispatchEvent(
      new CustomEvent('formSent', {
        detail: {
          form: form
        }
      })
    );
    // show popup, if popup module is connected and form has setting
    setTimeout(() => {
      if (modules.popup) {
        const popup = form.dataset.popupMessage;
        popup ? modules.popup.open(popup) : null;
      }
      // formValidate.formClean(form);
    }, 300);
    // clean form
  }
}
