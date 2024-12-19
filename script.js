document.getElementById('mode-toggle').addEventListener('click', () => {
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Redirect to the other page
    if (currentPage.includes('index.html')) {
        window.location.href = 'indexd.html';
    } else if (currentPage.includes('indexd.html')) {
        window.location.href = 'index.html';
    }
});


