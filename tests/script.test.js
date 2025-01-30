// Import the function to test

// Mock the DOM environment
beforeEach(() => {
    document.body.innerHTML = `
        <div class="card-grid"></div>
        <img id="Potatoface">
        <img id="PotatoLH">
        <img id="PotatoRH">
        <img id="PotatoLL">
        <img id="PotatoRL">
    `;
});

// Test the generateCards function
describe('generatesCards', () => {
    test('should generate the correct number of cards', () => {
        const type = 'face';
        const count = 5;
        const basePath = 'images/kawaii faces/image (';
        const extension = ').png';

        generateCards(type, count, basePath, extension);

        const cards = document.querySelectorAll('.card');
        expect(cards.length).toBe(count); // Check if 5 cards are generated
    });

    test('should set the correct data attribute on cards', () => {
        const type = 'hand';
        const count = 3;
        const basePath = 'images/hands/image (';
        const extension = ').png';

        generateCards(type, count, basePath, extension);

        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            expect(card.getAttribute(`data-${type}`)).toBe((index + 1).toString()); // Check data attributes
        });
    });

    test('should set the correct image source on cards', () => {
        const type = 'leg';
        const count = 4;
        const basePath = 'images/legs/image (';
        const extension = ').png';

        generateCards(type, count, basePath, extension);

        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            const imgSrc = card.querySelector('img').src;
            expect(imgSrc).toBe(`${basePath}${index + 1}${extension}`); // Check image sources
        });
    });
});

// Test the event listener logic
describe('Event Listener', () => {
    test('should update the face image when a face card is clicked', () => {
        // Mock a face card
        document.body.innerHTML += `
            <div class="card" data-face="1">
                <div class="card-inner">
                    <img src="images/kawaii faces/image (1).png">
                </div>
            </div>
        `;

        // Simulate a click on the card
        const card = document.querySelector('.card');
        card.click();

        // Check if the face image was updated
        const faceImage = document.getElementById('Potatoface').src;
        expect(faceImage).toBe('images/kawaii faces/image (1).png');
    });

    test('should update the hand images when a hand card is clicked', () => {
        // Mock a hand card
        document.body.innerHTML += `
            <div class="card" data-hand="2">
                <div class="card-inner">
                    <img src="images/hands/image (2).png">
                </div>
            </div>
        `;

        // Simulate a click on the card
        const card = document.querySelector('.card');
        card.click();

        // Check if the hand images were updated
        const leftHand = document.getElementById('PotatoLH').src;
        const rightHand = document.getElementById('PotatoRH').src;
        expect(leftHand).toBe('images/hands/image (2)l.png');
        expect(rightHand).toBe('images/hands/image (2)r.png');
    });

    test('should update the leg images when a leg card is clicked', () => {
        // Mock a leg card
        document.body.innerHTML += `
            <div class="card" data-leg="3">
                <div class="card-inner">
                    <img src="images/legs/image (3).png">
                </div>
            </div>
        `;

        // Simulate a click on the card
        const card = document.querySelector('.card');
        card.click();

        // Check if the leg images were updated
        const leftLeg = document.getElementById('PotatoLL').src;
        const rightLeg = document.getElementById('PotatoRL').src;
        expect(leftLeg).toBe('images/legs/image (3)l.png');
        expect(rightLeg).toBe('images/legs/image (3)r.png');
    });
});