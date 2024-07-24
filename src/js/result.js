function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const validNames = ['alexandre', 'yanis', 'nicolas', 'tom', 'léo', 'julien', 'kiks', 'martin', 'charles', 'matisse', 'adam', 'alex', 'gonzales'];
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
        case 'kiks':
            githubLink.href = 'https://github.com/Ttkiks';
            break;
        case 'martin':
            githubLink.href = 'https://github.com/DarkIncognito85'
            break;
        case 'charles':
            githubLink.href = 'https://github.com/Bigperss'
            break;
        case 'adam':
            githubLink.href = 'https://github.com/dandan2611'
            break;
        case 'alex':
            githubLink.href = 'https://github.com/a9ex'
        case 'gonzales':
            githubLink.href = 'https://github.com/Exominiate59'
        
    }
} else {
    window.location.href = 'invalid.html';
}
