const game = () =>
{
    let pScore = 0;
    let aiScore = 0;


    //Fade out the title screen and start the game
    const startGame = () =>
    {
        const playButton = document.querySelector(".title button");
        const titleScreen = document.querySelector(".title");
        const start = document.querySelector(".start");

        playButton.addEventListener('click', () =>
        {
            titleScreen.classList.add("fadeOut");
            start.classList.add("fadeIn");
        });
    };
    //Game actions
    const playActions = () =>
    {
        const options = document.querySelectorAll(".actions button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        //ai actions
        const computerOptions = ['rock', 'paper', 'scissors'];
        const computerNumber = Math.floor(Math.random() * 3);

        options.forEach(option=>
            {
                option.addEventListener('click', function()
                {
                    //When you choose your option, it randomly selects the ai action
                    const computerNumber = Math.floor(Math.random() * 3);
                    const computerAction = computerOptions[computerNumber];
                    //Update the winner
                    compareActions(option.className, computerAction);
                    //update player and computer image
                    playerHand.src = `./rps/${option.className}.png`;
                    computerHand.src = `./rps/${computerAction}.png`;
                });
            });
    };

    const updateScore = () =>
    {
        const playerScore = document.querySelector(".playerScore p");
        const computerScore = document.querySelector(".computerScore p");
        playerScore.textContent = pScore;
        computerScore.textContent = aiScore;
    };

    const compareActions = (playerAction, computerAction) =>
    {
        const winner = document.querySelector(".winner");

        //Tie
        if(playerAction === computerAction)
        {
            winner.textContent = "You tied!";
            return;
        }
        //Rock
        if(playerAction === "rock")
        {
            if(computerAction === "paper")
            {
                winner.textContent = "You lose!";
                aiScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "You win!";
                pScore++;
                updateScore();
                return;
            }
        }
        //Paper
        if(playerAction === "paper")
        {
            if(computerAction === "scissors")
            {
                winner.textContent = "You lose!";
                aiScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "You win!";
                pScore++;
                updateScore();
                return;
            }
        }
        //Scissors
        if(playerAction === "scissors")
        {
            if(computerAction === "rock")
            {
                winner.textContent = "You lose!";
                aiScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "You win!";
                pScore++;
                updateScore();
                return;
            }
        }
    }

    startGame();
    playActions();
};

game();