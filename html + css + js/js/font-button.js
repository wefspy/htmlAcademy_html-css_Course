let fontButtonSansSerif = document.querySelector('.font-button-sans-serif');
let fontButtonSerif = document.querySelector('.font-button-serif');

fontButtonSerif.onclick = function() {
    document.body.classList.add('serif');

    fontButtonSansSerif.classList.remove('active');
    fontButtonSerif.classList.add('active');
}

fontButtonSansSerif.onclick = function() {
    document.body.classList.remove('serif');

    fontButtonSerif.classList.remove('active');
    fontButtonSansSerif.classList.add('active');
}