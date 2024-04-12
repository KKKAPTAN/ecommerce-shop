const form = document.getElementById('leaveAMessageForm');
const body = document.body;

const logGenerator = (message, type) => {
    return `<div class="log ${type}">${message}</div>`;
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('user_email').value.trim();
    const subject = document.getElementById('message_subject').value.trim();
    const message = document.getElementById('message').value.trim();

    const logMessage = `Повідомлення від ${username} надіслано! Ми перетелефонуємо Вам якомога швидше!`;
    const logType = 'success';
    body.insertAdjacentHTML('afterbegin', logGenerator(logMessage, logType));

    document.getElementById('username').value = null;
    document.getElementById('user_email').value = null;
    document.getElementById('message_subject').value = null;
    document.getElementById('message').value = null;

    const log = document.querySelector('.log');
    setTimeout(() => {
        log.style.top = '5%';
        setTimeout(() => {
            log.style.top = '-20%';
            setTimeout(() => {
                log.remove();
            }, 300);
        }, 3000);
    }, Math.random() * 500);
})