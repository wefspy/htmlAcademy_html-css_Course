let previews = document.querySelectorAll('.preview-list li a');
let activePhoto = document.querySelector('.active-photo');

for (let preview of previews) {
    preview.onclick = function(evt) {
        evt.preventDefault();

        activePhoto.src = preview.href;

        document.querySelector('.active-item').classList.remove('active-item');
        preview.classList.add('active-item');
    }
}