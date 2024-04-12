const userCreated = JSON.parse(localStorage.getItem('user'));
if (localStorage.getItem('user') == null) {
    window.location.href = 'registration.html';
} else if(userCreated.token == 1) {
    window.location.href = 'cabinet.html';
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

const logForm = document.getElementById('log-form');

logForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // pass check
    if(document.getElementById('password-log').value !== userCreated.password) {
        document.getElementById('password-log').style.borderColor = 'red';
        return;
    }

    // user

    const user = {
        email: document.getElementById('email-log').value,
        password: document.getElementById('password-log').value,
        fullName: userCreated.fullName,
        token: 1
    }

    const userJSON = JSON.stringify(user);
    localStorage.setItem('user', userJSON);

    window.location.href = 'cabinet.html';
})