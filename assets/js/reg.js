if (localStorage.getItem('user') !== null) {
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

const regForm = document.getElementById('reg-form');

regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // pass check
    if(document.getElementById('password-reg').value !== document.getElementById('cpassword-reg').value) {
        document.getElementById('password-reg').style.borderColor = 'red';
        document.getElementById('cpassword-reg').style.borderColor = 'red';
        return
    }

    // user 

    const user = {
        email: document.getElementById('email-reg').value,
        password: document.getElementById('password-reg').value,
        fullName: document.getElementById('username').value,
        token: 0
    }

    const userJSON = JSON.stringify(user);
    localStorage.setItem('user', userJSON);

    window.location.href = 'login.html';
})