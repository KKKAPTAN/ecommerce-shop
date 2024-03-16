const buttonLearnMore = document.querySelectorAll('.banner-box .white');

const createPopUp = (message) => {
    return `<div class='popup'><div class="message"><p>${message}</p><button id='closePopUp'>Close</button></div></div>`;
}

const closePopUp = () => {
    document.querySelector('.popup').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.popup').remove();
    }, 200);
    body.style.overflow = 'auto';
}

buttonLearnMore[0].addEventListener('click', () => {
    const message = "Whenever the NEW COLLECTION is near to release, We provide for you sales UP TO 70%!";
    body.insertAdjacentHTML('afterbegin', createPopUp(message));
    body.style.overflow = 'hidden';
    setTimeout(() => {
        document.querySelector('.popup').style.opacity = 1;
    }, 100);
    document.querySelector('#closePopUp').addEventListener('click', () => { closePopUp() });
})

buttonLearnMore[1].addEventListener('click', () => {
    const message = "As you can understand by banner, the NEW COLLECTION will be here by summer, which means products have sales UP TO 70%!";
    body.insertAdjacentHTML('afterbegin', createPopUp(message));
    body.style.overflow = 'hidden';
    setTimeout(() => {
        document.querySelector('.popup').style.opacity = 1;
    }, 100);
    document.querySelector('#closePopUp').addEventListener('click', () => { closePopUp() });
})