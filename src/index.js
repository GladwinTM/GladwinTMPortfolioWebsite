
const typedTextSpan = document.querySelector("#typingHeaderText");
const textArray = [ "a Software Developer", "a Business Enthusiast", "a Creative Designer", "a Tech Enthusiast", "a Learner", "a Problem Solver"];
const navLinks = document.querySelector('.nav-links')


let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const textanimation=()=>{
    const currentword = textArray[wordIndex];
    const currentChar = currentword.substring(0, charIndex)
    typedTextSpan.textContent = currentChar;

    if (!isDeleting && charIndex < currentword.length) {
        charIndex++;
        setTimeout(textanimation, 50);
    }else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(textanimation, 25);
    }else{
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % textArray.length : wordIndex;
        setTimeout(textanimation, 300);
    }
}

textanimation();

function onToggleMenu(e) {
  e.name = e.name === 'menu' ? 'close' : 'menu'
  navLinks.classList.toggle('top-[9%]') // works now since Tailwind knows this class
}
