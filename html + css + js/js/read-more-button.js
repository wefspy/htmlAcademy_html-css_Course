let shortBlogArticles = document.querySelectorAll('.blog-article.short');

for (let shortBlogArticle of shortBlogArticles) {
    let button = shortBlogArticle.querySelector('.more');

    button.onclick = function() {
        shortBlogArticle.classList.remove('short');
    }
}