// Navbar
const links = document.querySelectorAll('.nav-link');
// links.forEach(link => {
//     link.addEventListener('click', function() {
//         links.forEach(_link => {
//             _link.classList.remove('link-decoration');
//         });
//         this.classList.add('link-decoration');
//     });
// })

// Gallery
// const innerDivs = document.querySelectorAll('div[class *= "gallery-img"]');
// innerDivs.forEach(innerDiv => {
//     innerDiv.onmouseenter = function() {
//         this.firstElementChild.style.display = 'block';
//         this.firstElementChild.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
//     };
//     innerDiv.onmouseleave = function() {
//         this.firstElementChild.style.display = 'none';
//     };
// })

// Contact
const form = document.querySelector('#contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let subject = e.target.subject.value;
    let message = e.target.message.value;
    try {
        window.open(`mailto:djoserjwt@gmail.com?subject=${subject}&body=${message}`);
    } catch (err) {
        console.log(err);
        form.reset();
    }
    form.reset();
});

// Changing active status of nav menu on scroll
const sectionAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sectionAll.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector(`li a[href *=${sectionId}]`).classList.add('link-decoration');
        } else {
            document.querySelector(`li a[href *=${sectionId}]`).classList.remove('link-decoration');
        }
    });
});