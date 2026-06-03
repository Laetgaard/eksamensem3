    const burgerBtn = document.getElementById('burgerBtn');
    const mainNav = document.getElementById('mainNav');

    burgerBtn.addEventListener('click', () => {
    // Toggles the 'X' morph animation on the button
    burgerBtn.classList.toggle('open');
    // Toggles the slide-down view utility on the menu links block
    mainNav.classList.toggle('active');
});
