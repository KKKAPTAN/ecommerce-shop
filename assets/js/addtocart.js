const addToCartButtons = document.querySelectorAll('.add-to-cart');
const products = document.querySelectorAll(".product");

addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const product = this.parentNode;
        const imageSrc = product.querySelector('img').getAttribute('src');
        const productName = product.querySelector('h5').innerText;
        const productPrice = product.querySelector('h4').innerText;
        const productData = {
            image: imageSrc,
            name: productName,
            price: productPrice,
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const existingProductIndex = cart.findIndex(item => item.name === productName);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1;
        } else {
            productData.quantity = 1;
            productData.key = productName + '_' + Date.now();
            cart.push(productData);
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        if (document.getElementById('cartCount')) {
            if (JSON.parse(localStorage.getItem('cart')).length > 9) {
                document.getElementById('cartCount').innerText = "9+";    
            } else{
                document.getElementById('cartCount').innerText = JSON.parse(localStorage.getItem('cart')).length;
            }
        } else {
            let length = JSON.parse(localStorage.getItem('cart')).length;
            document.getElementById('lg-bag').insertAdjacentHTML('afterbegin', `<span id="cartCount">${length}`);
        }
    });
});