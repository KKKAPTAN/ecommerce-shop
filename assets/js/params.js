const navbar = document.getElementById('navbar');
const links = navbar.getElementsByTagName('a');

products.forEach(product => {
    product.querySelector('img').setAttribute('draggable', false);
    product.querySelector('img').addEventListener('click', (event) => {
        let activeElement;
        const element = event.target.parentNode;
        for (let i = 0; i < links.length; i++) {
            if (links[i].classList.contains('active')) {
                activeElement = links[i];
                break;
            }
        }
        const redirectedFrom = activeElement.innerHTML;
        const redirectedLink = activeElement.getAttribute('href');
        const name = element.querySelector('h5').innerHTML;
        const price = element.querySelector('h4').innerHTML;
        const imageUrl = element.querySelector('img').getAttribute('src');

        window.location.href = `sproduct.html?redirectedFrom=${encodeURIComponent(redirectedFrom)}&redirectedLink=${encodeURIComponent(redirectedLink)}&name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&imageUrl=${encodeURIComponent(imageUrl)}`;
    })
})
