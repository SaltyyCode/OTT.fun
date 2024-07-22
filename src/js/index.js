function goToResultPage() {
    const selectedName = document.getElementById('nameSelect').value;
    if (selectedName) {
        window.location.href = `result.html?name=${selectedName}`;
    } else {
        alert('Veuillez choisir un nom.');
    }
}

const backgroundImage = new Image();
backgroundImage.src = 'assets/happy.jpg';
backgroundImage.onload = function() {
    console.log('Image chargée avec succès');
}
backgroundImage.onerror = function() {
    console.error('Erreur de chargement de l\'image');
}
