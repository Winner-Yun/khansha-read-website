function toggleText(event) {
    event.preventDefault();
    const content = document.querySelector('.text-content');
    const toggleLink = document.getElementById('toggle');

    // Initialize if not set
    if (!content.style.webkitLineClamp) {
        content.style.webkitLineClamp = '4';
    }

    if (content.style.webkitLineClamp === '4') {
        content.style.webkitLineClamp = 'unset';
        toggleLink.innerHTML = 'See less <i class="fa-light fa-angle-up"></i>';
    } else {
        content.style.webkitLineClamp = '4';
        toggleLink.innerHTML = 'See more <i class="fa-light fa-angle-down"></i>';
    }
}
