const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const redirectedFrom = urlParams.get('redirectedFrom');
const redirectedLink = urlParams.get('redirectedLink');
const name = urlParams.get('name');
const price = urlParams.get('price');
const imageUrl = urlParams.get('imageUrl');

const words = name.split(' ');
const productType = words[words.length - 1];

document.getElementById('main-image').src = imageUrl;
document.getElementById('productLink').querySelector('a').href = redirectedLink;
document.getElementById('productLink').querySelector('a').innerText = redirectedFrom;
document.getElementById('productPrice').innerText = price;
document.getElementById('productName').innerText = name;
document.getElementById('productLink').querySelector('span').innerText = productType;