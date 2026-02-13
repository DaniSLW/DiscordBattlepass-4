/* ==== FADE-IN EVENTS ==== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

/* ==== ADD CLASS =====*/
let dropDown = document.getElementById('dropdown');
let active = document.querySelector('.drop_down');
if(dropDown && active) {
    dropDown.addEventListener('click', () => {
        active.classList.toggle('active');
    });
}