const bar  = document.getElementById('bar');
const nav  = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() => {
      nav.classList.toggle('active');  
    })
}

const text = document.querySelector(".text-gerak");

const textLoad = () => {
    const texts = ["Front-end Developer", "UI/UX Designer"];
    let index = 0;
    let charIndex = 0;
    let isTyping = true;

    const type = () => {
        text.textContent = texts[index].substring(0, charIndex);
        charIndex++;

        if (charIndex <= texts[index].length && isTyping) {
            setTimeout(type, 100); // Adjust the typing speed (milliseconds)
        } else {
            // Start erasing after a delay
            isTyping = false;
            setTimeout(erase, 1000); // Adjust the delay before erasing (milliseconds)
        }
    };

    const erase = () => {
        text.textContent = texts[index].substring(0, charIndex);
        charIndex--;

        if (charIndex >= 0 && !isTyping) {
            setTimeout(erase, 50); // Adjust the erasing speed (milliseconds)
        } else {
            // Move to the next text after erasing
            isTyping = true;
            index = (index + 1) % texts.length;
            setTimeout(type, 1000); // Adjust the delay before typing the next text (milliseconds)
        }
    };

    type();
};

textLoad();
