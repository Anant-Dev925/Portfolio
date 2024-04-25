function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);

    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const btn = document.getElementById("get_started")

link1.addEventListener('click', () => {
    scrollToElement('.About');
});

link2.addEventListener('click', () => {
    scrollToElement('#feature');
});

link3.addEventListener('click', () => {
    scrollToElement('#project');
});

btn.addEventListener("click", () => {
  scrollToElement(".About");
});