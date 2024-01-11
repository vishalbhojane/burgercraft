const body = document.querySelector('body');
const copySection = document.querySelector('.copy');
const hamburger = document.querySelector('.hamburger');
const hamburgerStyles = document.querySelector('.hamburger-styles');
const hambugerSlices = document.querySelectorAll('.hamburger > div > div');

const hamWidth = document.getElementById('ham-width');
const hamHeight = document.getElementById('ham-height');
const hamThick = document.getElementById('ham-thick');
const hamRadius = document.getElementById('ham-radius');
const hamColor = document.getElementById('ham-color');

const config = {
    width: 30,
    height: 28,
    thick: 4,
    radius: 2,
    color: '#000',
};

const getHypotenuse = () => Math.hypot(config.width, config.height).toFixed(2);

const getInclination = () => (Math.asin(config.height / getHypotenuse()) * 180 / Math.PI).toFixed(1);

const getCorordinates = () => (config.thick / 2).toFixed(1);

const getStyles = () =>
    `
.hamburger > div{display:flex;flex-shrink:0;flex-direction:column;justify-content:space-between;align-items:flex-start;cursor:pointer;width:${config.width}px;height:${config.height}px;}
.hamburger > div > div{flex-shrink:0;border-radius:${config.radius}px;background:${config.color};width:${config.width}px;height:${config.thick}px;}
.hamburger > div, .hamburger > div > div{font-size: 0; line-height: 0;}
.hamburger > div > div:first-child,.hamburger > div > div:last-child{transform-origin:${getCorordinates()}px 50%;transition:transform 0.33s ease-in-out,width 0.33s ease-in-out;}
.hamburger > div > div:nth-child(2){transition:width 0.33s ease-in-out;}
.hamburger--active .hamburger > div > div:first-child,.hamburger--active .hamburger > div > div:last-child{width:${(getHypotenuse() - getCorordinates()).toFixed(1)}px;}
.hamburger--active .hamburger > div > div:first-child{transform:rotate(${getInclination()}deg);}
.hamburger--active .hamburger > div > div:last-child{transform:rotate(-${getInclination()}deg);}
.hamburger--active .hamburger > div > div:nth-child(2){width:0;}`;

const updateStyles = () => hamburgerStyles.textContent = getStyles();

const copyToClipboard = async (selector, type) => {
    try {
        if (!navigator.clipboard) {
            console.error("Clipboard API unavailable");
            return;
        }

        document.querySelector('.copied-notice')?.remove();
        const text = document.querySelector(selector)?.textContent.trim();

        await navigator.clipboard.writeText(text || '');

        const notice = `${type} copied!`;
        const p = document.createElement('p');
        p.innerText = notice;
        p.classList.add('copied-notice');
        copySection.firstElementChild.insertAdjacentElement('beforeend', p);
        setTimeout(() => p.remove(), 1000);
    } catch (err) {
        console.error("Failed to copy:", err);
    }
};

hamburger.addEventListener('click', () => hamburger.parentElement.classList.toggle('hamburger--active'));

function handleKeyUpEvent(element, propName) {
    element.addEventListener('keyup', (event) => {
        config[propName] = event.target.value;
        updateStyles();
    });
}

handleKeyUpEvent(hamWidth, 'width');
handleKeyUpEvent(hamHeight, 'height');
handleKeyUpEvent(hamThick, 'thick');
handleKeyUpEvent(hamRadius, 'radius');
handleKeyUpEvent(hamColor, 'color');