window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const testButtons = document.querySelectorAll('.test-btn');
    testButtons[0].addEventListener('click', function() {
        window.location.href = 'https://www.16personalities.com/es/test-de-personalidad';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const testButtons = document.querySelectorAll('.btn');
    testButtons[0].addEventListener('click', function() {
        window.location.href = 'https://www.16personalities.com/es/test-de-personalidad';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const testButtons = document.querySelectorAll('.cta-btn');
    testButtons[0].addEventListener('click', function() {
        window.location.href = 'https://www.16personalities.com/es/test-de-personalidad';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const testButtons = document.querySelectorAll('.cta-btn');
    testButtons[0].addEventListener('click', function() {
        window.location.href = 'https://chat.openai.com/?test-de-gustos-habilidades';
    });
});
