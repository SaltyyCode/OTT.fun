function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const name = getQueryParam('name');
if (name) {
    const greeting = document.getElementById('greeting');
    greeting.textContent = `Joyeux anniversaire ${name.charAt(0).toUpperCase() + name.slice(1)} !`;

    const personImage = document.getElementById('personImage');
    personImage.src = `assets/${name}.jpg`;

    const githubLink = document.getElementById('githubLink');
    if (name === 'alexandre') {
        githubLink.href = 'https://github.com/ludecieldev';
    } else if (name === 'nicolas') {
        githubLink.href = 'https://github.com/NicoDumetz';
    } else if (name === 'yanis') {
        githubLink.href = 'https://github.com/Yasl290';
    } else if (name === 'tom') {
        githubLink.href = 'https://github.com/FukuInTheCode';
    } else {
        githubLink.style.display = 'none';
    }
}
