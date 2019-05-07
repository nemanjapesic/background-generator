// Get Elements
const BODY = document.body;
const TOAST = document.querySelector("#toast");
const COLOR1 = document.querySelector("#color1");
const COLOR2 = document.querySelector("#color2");
const SLIDER = document.querySelector("#slider");
const CSS_TEXT = document.querySelector("#css-text");
const BTN_RANDOM = document.querySelector("#btn-random")

// Set Background Gradient and display CSS code
const setGradientBackground = () => {
    let linearGradient = `linear-gradient(${SLIDER.value}deg, ${COLOR1.value}, ${COLOR2.value})`;
    BODY.style.background = linearGradient;
    CSS_TEXT.textContent = `${linearGradient};`;
}

// Generate Random HEX color value
const getRandomColor = () => {
    let hexValues = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hexValues[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Set Color Inputs to Random Colors and setGradientBackground
const generateRandomGradient = () => {
    COLOR1.value = getRandomColor();
    COLOR2.value = getRandomColor();
    SLIDER.value = Math.floor(Math.random() * 361);
    setGradientBackground();
}

// Copy Text to Clipboard
const copyText = () => {
    // Select the text field
    CSS_TEXT.select();
    // Copy the Text
    document.execCommand("copy");

    showToast();
}

// Show Toast
const showToast = () => {
    // Set Toast Text and Show Toast
    TOAST.textContent = "Copied to clipboard";
    TOAST.classList.add("show");
    // Hide toast after 3 seconds
    setTimeout(() => {
        TOAST.classList.remove("show");
    }, 3000);
}

// Set Initial Background to Random Gradient
generateRandomGradient();

// Set Event Listeners
COLOR1.addEventListener("input", setGradientBackground);
COLOR2.addEventListener("input", setGradientBackground);
SLIDER.addEventListener("input", setGradientBackground);
BTN_RANDOM.addEventListener("click", generateRandomGradient);
CSS_TEXT.addEventListener("click", copyText);