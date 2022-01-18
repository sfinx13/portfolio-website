function showCurrrentYear() {
    const element = document.querySelector('.current-year');
    element.textContent = new Date().getFullYear();
}

window.addEventListener('DOMContentLoaded', () => {
    showCurrrentYear();
    setTimeout(() => {
        document.querySelector('.loading').classList.add('loaded');
    }, 1000)
});