const continueReadingTrigger = document.querySelectorAll('#continueReading');


continueReadingTrigger.forEach(item => {
    item.addEventListener('click', event => {
        const element = event.target.parentNode.querySelector('p');
        if (element.clientHeight === 0) {
            const headerHeight = element.parentNode.querySelector('h4').scrollHeight;
            element.parentNode.querySelector('h4').style.top = `${headerHeight}px`;
            element.parentNode.querySelector('h4').style.opacity = 0;
            event.target.parentNode.querySelector('a').innerText = "ЗГОРНУТИ";
            const height = element.scrollHeight;
            element.style.height = height + 'px';
            element.style.marginTop = -headerHeight + 'px';
        } else {
            element.parentNode.querySelector('h4').style.top = '0';
            element.parentNode.querySelector('h4').style.opacity = 1;
            event.target.parentNode.querySelector('a').innerText = "РОЗГОРНУТИ";
            element.style.height = 0;
            element.style.marginTop = 0;
        }
    })
})