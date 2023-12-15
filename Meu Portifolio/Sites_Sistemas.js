function toggleMenu() {
    var menu = document.querySelector('ul');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('open');
}