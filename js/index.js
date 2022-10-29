
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