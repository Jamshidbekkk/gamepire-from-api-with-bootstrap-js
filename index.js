//! Fetch games list
const fetchGames = () => {
    fetch("https://api.rawg.io/api/games?key=460cd17137bd4114915dfd76478c1ba7")
    .then(response => response.json())
    .then(data => {
        const gameList = document.getElementById("gameList");
        data.results.forEach(game => {
            const gameCard = document.createElement("div");
            gameCard.classList.add("col-md-4", "mb-4");
            gameCard.innerHTML = `
            <div class="card">
            <div class="card-header" style="background-image: url('${game.background_image}'); height: 200px; background-size: cover; background-position: center;"></div>
            <div class="card-body">
            <h5 class="card-title text-center"> <a href="game-details.html?id=${game.id}">${game.name} </a> </h5>
            <p class="card-text d-inline-block ms-5 me-5">ID: ${game.id}</p>
            <p class="card-text d-inline-block ms-5 text-end">Rating: ${game.rating}</p>
            
            </div>
            </div>
            `;
            gameList.appendChild(gameCard);
        });
    });
}
fetchGames();

//! Function to check if the user has scrolled to the bottom of the page
const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
        fetchGames(); 
    }
};
window.addEventListener("scroll", handleScroll);


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
