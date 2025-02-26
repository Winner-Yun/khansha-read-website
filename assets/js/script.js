window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Hide loader and show content after loading is complete
    loader.style.display = 'none';
    content.classList.remove('hidden');
});