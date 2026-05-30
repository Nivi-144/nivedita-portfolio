// LOADER
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader")
            .style.display = "none";

    }, 1800);

});


// TYPING EFFECT
const typingElement =
    document.querySelector(".typing");

const texts = [
    "AI/ML Enthusiast",
    "Future Software Engineer",
    "CSE Student @ UEM Kolkata",
    "Problem Solver",
    "Web Developer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentText =
        texts[textIndex];

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(
                0,
                charIndex++
            );

        if (charIndex >
            currentText.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1200
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(
                0,
                charIndex--
            );

        if (charIndex < 0) {

            deleting = false;

            textIndex =
                (textIndex + 1)
                % texts.length;
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


// PARTICLES JS
particlesJS("particles-js", {

    particles: {

        number: {
            value: 90
        },

        color: {
            value: [
                "#00EAFF",
                "#7B00FF"
            ]
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.6
        },

        size: {
            value: 3
        },

        move: {
            speed: 2
        },

        line_linked: {
            enable: true,
            color: "#00EAFF",
            opacity: 0.3
        }
    }
});


// HOVER SOUND
const hoverSound =
    document.getElementById(
        "hoverSound"
    );

const buttons =
    document.querySelectorAll(
        ".btn, .social-icons a, .nav-links a"
    );

buttons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            hoverSound.currentTime = 0;
            hoverSound.play();

        }
    );

});


// SCROLL ANIMATION
const cards =
    document.querySelectorAll(
        ".glass-card, .project-card"
    );

window.addEventListener(
    "scroll",
    () => {

        cards.forEach(card => {

            const position =
                card.getBoundingClientRect()
                .top;

            const screenHeight =
                window.innerHeight;

            if (
                position
                < screenHeight - 100
            ) {

                card.style.opacity = "1";
                card.style.transform =
                    "translateY(0px)";
            }

        });

    }
);