function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const validNames = ['alexandre', 'yanis', 'nicolas', 'tom', 'léo', 'julien'];
const name = getQueryParam('name');

if (name && validNames.includes(name.toLowerCase())) {
    const greeting = document.getElementById('greeting');
    greeting.textContent = `Joyeux anniversaire ${name.charAt(0).toUpperCase() + name.slice(1)} !`;

    const personImage = document.getElementById('personImage');
    personImage.src = `assets/${name.toLowerCase()}.jpg`;

    const githubLink = document.getElementById('githubLink');
    switch (name.toLowerCase()) {
        case 'alexandre':
            githubLink.href = 'https://github.com/ludecieldev';
            break;
        case 'nicolas':
            githubLink.href = 'https://github.com/NicoDumetz';
            break;
        case 'yanis':
            githubLink.href = 'https://github.com/Yasl290';
            break;
        case 'tom':
            githubLink.href = 'https://github.com/FukuInTheCode';
            break;
        case 'léo':
            githubLink.href = 'https://github.com/leodumont444';
            break;
        case 'julien':
            githubLink.href = 'https://github.com/Julienmarss';
            break;
        default:
            githubLink.style.display = 'none';
            break;
    }
} else {
    window.location.href = 'invalid.html';
}
