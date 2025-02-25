document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');
    heading.textContent = 'Welcome to Web Development!';

    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    document.body.appendChild(button);

    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });
});
