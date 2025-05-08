const catCall= 'https://api.thecatapi.com/v1/images/search';
function callCat() {
    // Fetch a random cat image
    fetch(catCall)
    .then(response => response.json())
    .then(data => {
        const catImage = data[0].url;
        document.getElementById('cat').src = catImage;
        document.getElementById('cat').style.display = 'block';
    });

 const button = document.getElementById('button');
 const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
 button.style.backgroundColor = randomColor;
}

// Curtain functionality
document.querySelector('.toggle-curtain').addEventListener('click', function() {
    document.querySelector('.curtain').classList.toggle('open');
    callCat();
});

// Dice functionality
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const rollButton = document.querySelector('.roll-button');

function rollDice() {
    // Remove rolling class if it exists
    dice1.classList.remove('rolling');
    dice2.classList.remove('rolling');
    
    // Trigger reflow
    void dice1.offsetWidth;
    void dice2.offsetWidth;
    
    // Add rolling class
    dice1.classList.add('rolling');
    dice2.classList.add('rolling');
    
    // Generate random numbers after animation
    setTimeout(() => {
        const num1 = Math.floor(Math.random() * 6) + 1;
        const num2 = Math.floor(Math.random() * 6) + 1;
        
        // Set the final rotation based on the random number
        const rotations = {
            1: 'rotateX(0deg) rotateY(0deg)',
            2: 'rotateX(0deg) rotateY(180deg)',
            3: 'rotateX(0deg) rotateY(90deg)',
            4: 'rotateX(0deg) rotateY(-90deg)',
            5: 'rotateX(90deg) rotateY(0deg)',
            6: 'rotateX(-90deg) rotateY(0deg)'
        };
        
        dice1.style.transform = rotations[num1];
        dice2.style.transform = rotations[num2];
    }, 1000);
}

rollButton.addEventListener('click', rollDice);