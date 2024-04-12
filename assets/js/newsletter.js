// newsletter submission

const submitEmail = document.getElementById('newsletterSubmit');
const formNewsletter = document.getElementById('formNewsletter');
const newsletterInput = document.getElementById('newsletterInput');
const body = document.body;

const logGenerator = (message, type) => {
    return `<div class="log ${type}">${message}</div>`;
}

const isSubscribed = (email) => {
    const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
    return subscribedEmails.includes(email);
}

const updateSubscribedEmails = (email) => {
    let subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
    subscribedEmails.push(email);
    localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));
}

const displaySubscriptionResult = (email) => {
    const successMessage = 'Ви успішно підписали на розсилку повідомлень від Cara!';
    const subscribed = 'Ця пошта вже підписана';
    const logMessage = isSubscribed(email) ? subscribed : successMessage;
    const logType = isSubscribed(email) ? 'error' : 'success';
    body.insertAdjacentHTML('afterbegin', logGenerator(logMessage, logType));
    if (logType === 'success') {
        updateSubscribedEmails(email);
    }
    const log = document.querySelector('.log');
    setTimeout(() => {
        log.style.top = '5%';
        submitEmail.innerHTML = 'Sign up';
        newsletterInput.value = null;
        setTimeout(() => {
            log.style.top = '-20%';
            setTimeout(() => {
                log.remove();
            }, 300);
        }, 3000);
    }, Math.random() * 500);
};

formNewsletter.addEventListener('submit', (event) => {
    event.preventDefault();
    if (document.querySelector('.log')) {
        document.querySelector('.log').remove();
    }
    const email = newsletterInput.value.trim();
    submitEmail.innerHTML = '<div class="loader"></div>';
    displaySubscriptionResult(email);
});