let themeButtonDark = document.querySelector('.theme-button-dark');
let themeButtonLight = document.querySelector('.theme-button-light');

themeButtonDark.onclick = function() {
    document.body.classList.add('dark');

    themeButtonLight.classList.remove('active');
    themeButtonDark.classList.add('active');
}

themeButtonLight.onclick = function() {
    document.body.classList.remove('dark');

    themeButtonDark.classList.remove('active');
    themeButtonLight.classList.add('active');
}