
// Opens Email window
const form = document.querySelector('.contact-form');
form.onsubmit = function (e) {
    e.preventDefault();
    const name = e.target.name.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    window.open(`mailto:a.qadir.jamali@gmail.com?subject=${subject}&body=${`Name: ${name}   Message: ${message}`}`);
    e.target.reset();
}

// Makes nav link active on scroll
window.onscroll = function () {
    const scrollY = window.scrollY;
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.id;

        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            const navLink = document.querySelector(`li a[href*=${sectionId}]`);
            navLink.classList.add('active-link');
        } else {
            const navLink = document.querySelector(`li a[href*=${sectionId}]`);
            navLink.classList.remove('active-link');
        }
    })
}