//! Function to bring the clicked game infos
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    
    if (gameId) {
        fetch(`https://api.rawg.io/api/games/${gameId}?key=460cd17137bd4114915dfd76478c1ba7`)
        .then(response => response.json())
        .then(data => {
            const gameDetails = document.getElementById("gameDetails");
            gameDetails.innerHTML = `
            <h1 class="display-4 text-center"><strong>${data.name}</strong></h1>
            <p><strong>Description:</strong> ${data.description}</p>
            <p><strong>Genres:</strong> ${data.genres.map(genre => genre.name).join(', ')}</p>
            <p><strong>Platforms</strong>: ${data.platforms.map(platform => platform.platform.name).join(', ')}</p>
            <p><strong>Publisher:</strong> ${data.publishers.map(publisher => publisher.name).join(', ')}</p>
            <img src="${data.background_image_additional}"/>
            `;
        })
        .catch(error => {
            console.error('Error fetching game details:', error);
        });
    } else {
        console.error('Game ID not found in URL parameter.');
    }
});

//! Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("change", () => {
    const bootstrapThemeLink = document.getElementById("bootstrap-theme");
    const customDarkThemeLink = document.getElementById("custom-dark-theme");
    if (darkModeToggle.checked) {
        
        bootstrapThemeLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.dark.min.css";
        customDarkThemeLink.disabled = false;
    } else {
        
        bootstrapThemeLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
        customDarkThemeLink.disabled = true;
    }
});
