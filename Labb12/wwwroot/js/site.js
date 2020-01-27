// Funktion för att lägga till aktiv CSS-klass på det aktiva menyalternativet
window.addEventListener('load', function () {
    document.querySelectorAll('.navbar-item').forEach(function (element) {
        if (element.href === window.location.href) {
            element.parentElement.classList.add('active');
        }
    })
});