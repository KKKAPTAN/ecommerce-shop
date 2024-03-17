const continueReadingTrigger = document.querySelectorAll('#continueReading');

continueReadingTrigger.forEach(item => {
    item.addEventListener('click', event => {
        const element = event.target.parentNode.querySelector('p');
        if (element.clientHeight === 0) {
            event.target.parentNode.querySelector('a').innerText = "CLOSE";
            const height = element.scrollHeight;
            element.style.height = height + 'px';
            element.style.paddingTop = '15px';
            element.style.marginTop = '-12px';
        } else {
            event.target.parentNode.querySelector('a').innerText = "CONTINUE READING";
            element.style.height = 0;
            element.style.paddingTop = '0px';
            element.style.marginTop = '0px';
        }
    })
})