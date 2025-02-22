document.addEventListener('DOMContentLoaded', function() {
    const currentPage = document.location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('nav a');
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        }
    });
});

window.addEventListener('load', () => {
    const pageEnd = performance.mark('pageEnd')
    const loadTime = pageEnd.startTime / 1000

    const footer = document.querySelector('footer');
    const loadTimeElement = document.createElement('div');
    loadTimeElement.textContent = `Время загрузки страницы: ${loadTime} мс`;
    footer.appendChild(loadTimeElement);
})
