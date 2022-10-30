import throttle from "lodash.throttle";



const refs = {
    form: document.querySelector('.feedback-form'),
    inputEmail: document.querySelector('.feedback-form input'),
    inputMessage: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

let formData = {};
populateFormData();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));


function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function populateFormData() {
  const inputData = localStorage.getItem(STORAGE_KEY);
 
  if (inputData) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (formData.email) {
      refs.inputEmail.value = formData.email;
    }
    if (formData.message) {
      refs.inputMessage.value = formData.message;
    }
  }
}
