import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = formEl.querySelector('input[name="email"]');
const messageEl = formEl.querySelector('textarea[name="message"]');

const FORM_LS_KEY = 'feedback-form-state';
const formData = {};
const savedDataForm = JSON.parse(localStorage.getItem(FORM_LS_KEY));

formEl.addEventListener('input', throttle(handleSaveToLS, 500));
formEl.addEventListener('submit', throttle(handleSubmit, 500));

if (savedDataForm) {
  emailEl.value = savedDataForm.email || '';
  messageEl.value = savedDataForm.message || '';
}

function handleSaveToLS(evt) {
  if (evt.target.name === 'email') {
    formData.email = evt.target.value;
  }
  if (evt.target.name === 'message') {
    formData.message = evt.target.value;
  }
  localStorage.setItem(FORM_LS_KEY, JSON.stringify(formData));
}

function handleSubmit(evt) {
  evt.preventDefault();

  const emailValue = emailEl.value.trim();
  const messageValue = messageEl.value.trim();

  if (!emailValue || !messageValue) {
    alert('Будь ласка, заповніть всі поля перед відправленням форми.');
    return;
  }

  const currentData = {
    email: emailValue,
    message: messageValue,
  };
  console.log(currentData);
  localStorage.removeItem(FORM_LS_KEY);
  formEl.reset();
  formData.email = '';
  formData.message = '';
}
