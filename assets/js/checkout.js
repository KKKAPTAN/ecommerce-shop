const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const checkoutParam = urlParams.get('checkoutParam');

document.getElementById('totalPrice').innerText = `${checkoutParam}`;
amount = JSON.parse(localStorage.getItem('cart')).length;

if (amount > 1) {
    document.getElementById('itemsAmount').innerText = `${amount} items`;
} else {
    document.getElementById('itemsAmount').innerText = `${amount} item`;
}

localStorage.removeItem('cart');