const feedbackForm = document.querySelector('.feedback-form');
const email = feedbackForm.elements.email;
const message = feedbackForm.elements.message;
const LS_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const savedData = JSON.parse(localStorage.getItem(LS_KEY));
if (savedData) {
  formData = savedData;
  email.value = formData.email;
  message.value = formData.message;
}

feedbackForm.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(LS_KEY);
    feedbackForm.reset();
    formData.email = '';
    formData.message = '';
  }
});
