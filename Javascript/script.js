document.addEventListener('click', function (e) {
    const card = e.target.closest('.card');
    const btnFaces = document.getElementById("faces");
    const btnHands = document.getElementById("hands");
    const btnLegs = document.getElementById("legs");

  
    if (e.target === btnFaces) {
        generateFacesCards();
    }

    
    if (card && card.dataset.face) {
        const faceNumber = card.dataset.face;
        const newSrc = `images/kawaii faces/image (${faceNumber}).png`;
        document.getElementById("Potatoface").src = newSrc;
    }

    if (e.target === btnHands) {
        generateHandCards();
    }

   
    if (card && card.dataset.hand) {
        const handsNumber = card.dataset.hand;
        const lhands = `images/hands/image (${handsNumber})l${handsNumber}.png`;
        const rhands = `images/hands/image (${handsNumber})r${handsNumber}.png`;
        document.getElementById("PotatoLH").src = lhands;
        document.getElementById("PotatoRH").src = rhands;
    }


    if (e.target === btnLegs) {
        generateLegsCards();
    }

 
    if (card && card.dataset.leg) {
        const legsNumber = card.dataset.leg;
        const legs = `images/legs/image (${legsNumber}).png`;
        document.getElementById("PotatoLegs").src = legs;
    }
});

function generateFacesCards() {
    const cardGrid = document.querySelector('.card-grid');
    cardGrid.innerHTML = ''; // Clear existing cards

    for (let i = 1; i <= 10; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('role', 'button');
        card.setAttribute('data-face', i);

        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';

        const img = document.createElement('img');
        img.className = 'item1';
        img.src = `images/kawaii faces/image (${i}).png`;

        cardInner.appendChild(img);
        card.appendChild(cardInner);
        cardGrid.appendChild(card);
    }
}


function generateHandCards() {
    const cardGrid = document.querySelector('.card-grid');
    cardGrid.innerHTML = ''; // Clear existing cards

    for (let i = 1; i <= 10; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('role', 'button');
        card.setAttribute('data-hand', i);

        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';

        const img = document.createElement('img');
        img.className = 'item1';
        img.src = `images/hands/image (${i}).png`;

        cardInner.appendChild(img);
        card.appendChild(cardInner);
        cardGrid.appendChild(card);
    }
}


function generateLegsCards() {
    const cardGrid = document.querySelector('.card-grid');
    cardGrid.innerHTML = ''; // Clear existing cards

    for (let i = 1; i <= 10; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('role', 'button');
        card.setAttribute('data-leg', i);

        const cardInner = document.createElement('div');
        cardInner.className = 'card-inner';

        const img = document.createElement('img');
        img.className = 'item1'; 
        img.src = `images/legs/image (${i}).png`;
   

        cardInner.appendChild(img);
        card.appendChild(cardInner);
        cardGrid.appendChild(card);
    }
}
