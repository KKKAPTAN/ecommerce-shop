const user = JSON.parse(localStorage.getItem('user'));
if (localStorage.getItem('user') == null) {
    window.location.href = 'registration.html';
} else if(user.token == 0) {
    window.location.href = 'login.html';
}
const inputs = document.querySelectorAll('.input-container input');
inputs.forEach(input => {
    input.addEventListener('focus', function () {
        input.nextElementSibling.classList.add('active');
    });
    input.addEventListener('blur', function () {
        if (input.value === '') {
            input.nextElementSibling.classList.remove('active');
        }
    });
    input.addEventListener('input', function () {
        if (input.value !== '') {
            input.nextElementSibling.classList.add('active');
        } else {
            input.nextElementSibling.classList.remove('active');
        }
    });
});

const svgs = document.querySelectorAll('.input-container svg');

svgs.forEach(svg => {
    svg.addEventListener('click', () => {
        const type = svg.parentNode.querySelector('input').type;
        if (type === "password") {
            svg.parentNode.querySelector('input').type = "text";
            svg.style.opacity = 0.5;
        } else {
            svg.style.opacity = 1;
            svg.parentNode.querySelector('input').type = "password";
        }
    })
})

inputs[0].value = user.fullName;
inputs[1].value = user.email;
inputs[2].value = user.password;

const cabForm = document.getElementById('cab-form');

cabForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // user 

    const userNew = {
        email: document.getElementById('email-cab').value,
        password: document.getElementById('password-cab').value,
        fullName: document.getElementById('name-cab').value,
        token: 1
    }

    const userJSON = JSON.stringify(userNew);
    localStorage.setItem('user', userNew);
})