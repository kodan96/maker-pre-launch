document.addEventListener('DOMContentLoaded', () => {
    const email = document.querySelector('#email');
    const submit = document.querySelector('#submit');
    const error = document.querySelector('.error');
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const validateEmail = (e) => {
        e.preventDefault();
        if (email.value.match(re)) {
            error.innerHTML = 'Success!';
            error.style.color = 'green';
        } else if (email.value === '') {
            error.innerHTML = 'Oops! Please add your email.';
            error.style.color = 'red';
        } else {
            error.innerHTML = "Oops! That doesn't look like a valid email address.";
            error.style.color = 'red';
        }
    };

    submit.addEventListener('click', validateEmail);
});