const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const redirectedFrom = urlParams.get('redirectedFrom');
const redirectedLink = urlParams.get('redirectedLink');
const name = urlParams.get('name');
const price = urlParams.get('price');
const imageUrl = urlParams.get('imageUrl');

const words = name.split(' ');

document.getElementById('main-image').src = imageUrl;
document.getElementById('productLink').addEventListener('click', () => {window.location.href = redirectedLink});
document.getElementById('productLink').style.cursor = 'pointer';
document.getElementById('productLink').style.width = 'max-content';
document.getElementById('productLink').querySelector('a').innerText = `${redirectedFrom}`;
document.getElementById('productPrice').innerText = price;
document.getElementById('productName').innerText = name;