window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const item = document.getElementById('item')

    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
