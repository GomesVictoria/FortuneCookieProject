// script.js
document.getElementById('cookie').addEventListener('click', crackCookie);

function crackCookie() {
    // Animate the cookie pieces to "crack open"
    const leftPiece = document.getElementById('cookie-left');
    const rightPiece = document.getElementById('cookie-right');
    leftPiece.style.transform = 'rotate(-45deg) translateX(-30px)';
    rightPiece.style.transform = 'rotate(45deg) translateX(30px)';
    
    // Display the love message
    const message = document.getElementById('message');
    message.textContent = "VICTORIA HAS THE BEST BOYFRIEND EVER ❤️";
    message.classList.add('show');
}
