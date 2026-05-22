const words = [
    "Pre-Sales Engineer",
    "Post-Sales Engineer",
    "Network Security Engineer",
    "Palo ALto Specialist"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const changingText = document.getElementById("changing-text");

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        changingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        changingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1200);
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    const speed = isDeleting ? 50 : 90;
    setTimeout(typeEffect, speed);
}

typeEffect();