// Abrir sobre
function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.querySelector('.envelope-container');
    envelope.classList.add('opened');
    envelopeContainer.classList.add('opened');
}

// Cerrar carta
function closeLetter(event) {
    event.stopPropagation();
    const envelope = document.getElementById('envelope');
    const envelopeContainer = document.querySelector('.envelope-container');
    envelope.classList.remove('opened');
    envelopeContainer.classList.remove('opened');
}
