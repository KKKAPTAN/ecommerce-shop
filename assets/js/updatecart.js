let items = JSON.parse(localStorage.getItem('cart'));

if (items) {
    let bag = document.getElementById('lg-bag');
    if (items.length > 9) {       
        bag.insertAdjacentHTML('afterbegin', `<span id="cartCount">9+`)
    } else {
        bag.insertAdjacentHTML('afterbegin', `<span id="cartCount">${items.length}`)
    }
}