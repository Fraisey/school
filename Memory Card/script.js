const cards = document.querySelectorAll('.card');

let flippedCard = false;
let freezeBoard = false;
let firstCard, secondCard;

function flipCard()
{
    if(freezeBoard) return;

    if(this === firstCard) return;

    this.classList.add('flip');

    if(!flippedCard)
    {
        flippedCard = true;
        firstCard = this;
    }
    else
    {
        flippedCard = false;
        secondCard = this;

        if(firstCard.dataset.image === secondCard.dataset.image)
        {
            firstCard.removeEventListener('click', flipCard)
            secondCard.removeEventListener('click', flipCard)
        }
        else
        {
            freezeBoard = true;

            setTimeout(() => 
            {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');

                freezeBoard = false;
            }, 1500)
            
        }
    }
}

function shuffle()
{
    cards.forEach(card =>
        {
            let random = Math.floor(Math.random() * 12);
            card.style.order = random;
        });
}

shuffle();
cards.forEach(card => card.addEventListener('click', flipCard));