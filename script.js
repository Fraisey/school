const game = () =>
{
    let pScore = 0;
    let aiScore = 0;

    const startGame = () =>
    {
        const playButton = document.querySelector(".title button");
        const titleScreen = document.querySelector(".title");
        const start = document.querySelector(".start");

        playButton.addEventListener("click", () =>
        {
            titleScreen.classList.add("fadeOut");
            start.classList.add("fadeIn");
        });
    };

    startGame();
};

game();