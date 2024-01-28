const robots = [
    { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', image: 'https://robohash.org/1?200x200' },
    { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', image: 'https://robohash.org/2?200x200' },
    { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', image: 'https://robohash.org/3?200x200' },
    { id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', image: 'https://robohash.org/4?200x200' },
    { id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', image: 'https://robohash.org/5?200x200' },
    { id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', image: 'https://robohash.org/6?200x200' },
    { id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', image: 'https://robohash.org/7?200x200' },
    { id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', image: 'https://robohash.org/8?200x200' },
    { id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io', image: 'https://robohash.org/9?200x200' },
    { id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', image: 'https://robohash.org/10?200x200' }
];

function createCardElement(tag, textContent) {
    const element = document.createElement(tag);
    element.textContent = textContent;
    return element;
}

function generateCards() {
    const cardContainer = document.getElementById('card-container');

    robots.forEach(robot => {
        const card = createCardElement('div', 'card');

        const img = createCardElement('img');
        img.src = robot.image;
        img.alt = robot.name;

        const name = createCardElement('h2', robot.name);
        const username = createCardElement('p', `Username: ${robot.username}`);
        const email = createCardElement('p', `Email: ${robot.email}`);

        card.append(img, name, username, email);
        cardContainer.appendChild(card);
    });
}

function filterRobots() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.getElementsByClassName('card');

    Array.from(cards).forEach(card => {
        const name = card.querySelector('h2').textContent.toLowerCase();
        card.style.display = name.includes(searchTerm) ? 'block' : 'none';
    });
}

window.onload = function() {
    generateCards();
    document.getElementById('searchInput').addEventListener('input', filterRobots);
};
