import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const FORM_LS_KEY = 'feedback-form-state';
const formData = {};
const savedDataForm = JSON.parse(localStorage.getItem(FORM_LS_KEY));

formEl.addEventListener('input', throttle(handleSaveToLS, 500));
formEl.addEventListener('submit', throttle(handleSubmit, 500));

if (savedDataForm) {
  formEl.querySelector('input[name="email"]').value = savedDataForm.email || '';
}
if (savedDataForm) {
  formEl.querySelector('textarea[name="message"]').value =
    savedDataForm.message || '';
}

function handleSaveToLS(evt) {
  //   console.log(evt.target.name);
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
  if (!formData.email || !formData.message) {
    alert('Будь ласка, заповніть всі поля перед відправленням форми.');
    return;
  }
  console.log(formData);
  localStorage.removeItem(FORM_LS_KEY);
  formEl.reset();
  formData.email = '';
  formData.message = '';
}
