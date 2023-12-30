
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('#contact-form input[type="text"]').value;
    const email = document.querySelector('#contact-form input[type="email"]').value;
    const message = document.querySelector('#contact-form textarea').value;

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    
});
