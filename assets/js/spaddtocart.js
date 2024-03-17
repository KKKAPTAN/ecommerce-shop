const addToCartButton = document.querySelector('#addProduct');

addToCartButton.addEventListener('click', function () {
    const imageSrc = document.querySelector(".single-product-image").querySelector('img').getAttribute('src');
    const productName = document.querySelector('.single-product-details').querySelector('#productName').innerText;
    const productPrice = document.querySelector('.single-product-details').querySelector('#productPrice').innerText;
    const productData = {
        image: imageSrc,
        name: productName,
        price: productPrice,
    };

    const productQuantity = document.getElementById('productQuantity').value;
    document.getElementById('productQuantity').value = 1;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = cart.findIndex(item => item.name === productName);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += productQuantity;
    } else {
        productData.quantity = productQuantity;
        productData.key = productName + '_' + Date.now();
        cart.push(productData);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    if (document.getElementById('cartCount')) {
        if (JSON.parse(localStorage.getItem('cart')).length > 9) {
            document.getElementById('cartCount').innerText = "9+";
        } else {
            document.getElementById('cartCount').innerText = JSON.parse(localStorage.getItem('cart')).length;
        }
    } else {
        let length = JSON.parse(localStorage.getItem('cart')).length;
        document.getElementById('lg-bag').insertAdjacentHTML('afterbegin', `<span id="cartCount">${length}`);
    }
});