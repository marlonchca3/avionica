// Función para alternar la visibilidad del chatbot
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        chatbot.style.display = 'block';
        // Aquí puedes insertar el iframe del chatbot cuando se necesite
        if (!chatbot.querySelector('iframe')) {
            const iframe = document.createElement('iframe');
            iframe.src = ''; // Aquí irá el link del chatbot
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';
            iframe.style.borderRadius = '10px';
            chatbot.appendChild(iframe);
        }
    } else {
        chatbot.style.display = 'none';
    }
}

// Función para actualizar los enlaces de descarga
function updateDownloadLinks(links) {
    const downloadButtons = {
        'an32b-ops': document.getElementById('an32b-ops'),
        'an32b-maint': document.getElementById('an32b-maint'),
        'mi17-ops': document.getElementById('mi17-ops'),
        'mi17-maint': document.getElementById('mi17-maint'),
        'mi171-ops': document.getElementById('mi171-ops'),
        'mi171-maint': document.getElementById('mi171-maint')
    };

    for (const [id, url] of Object.entries(links)) {
        if (downloadButtons[id]) {
            downloadButtons[id].href = url;
        }
    }
}

// Esta función se llamará cuando tengas los enlaces de los manuales
// Ejemplo de uso:

updateDownloadLinks({
    'an32b-ops': 'URL_DEL_MANUAL',
    'an32b-maint': 'https://drive.google.com/drive/folders/1zFrVljLnsXt-K9Px1amA3a9LaeKNgtOy',
    'mi17-ops': 'URL_DEL_MANUAL',
    'mi17-maint': 'URL_DEL_MANUAL',
    'mi171-ops': 'URL_DEL_MANUAL',
    'mi171-maint': 'URL_DEL_MANUAL'
});
