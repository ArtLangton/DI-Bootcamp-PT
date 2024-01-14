
let solarArray = [
    {name: 'Mercury', moons: 0, color: "#c8c3cc"},
    {name: 'Venus', moons: 0, color: "#ff7b25"},
    {name: 'Earth', moons: 1, color: "blue"},
    {name: 'Mars', moons: 2, color: "#c94c4c"},
    {name: 'Jupiter', moons: 79, color: "#bc5a45"},
    {name: 'Saturn', moons: 82, color: "#dac292"},
    {name: 'Uranus', moons: 27, color: "#b7d7e8"},
    {name: 'Neptune', moons: 14, color: "#034f84"},
    {name: 'Pluto', moons: 5, color: "#cab577"}
    ]

    let planetSection = document.querySelector('section');
    console.log(planetSection);

    for (let planet of solarArray){

        let divPlanets = document.createElement('div');
        divPlanets.classList.add('planet');
        divPlanets.innerText = planet.name;
        divPlanets.style.backgroundColor = planet.color;
        planetSection.appendChild(divPlanets)

    for (let moons of solarArray){

        let divMoons = document.createElement('div');
        divMoons.classList.add('moon');
        divMoons.innerText = planet.moons;
        divMoons.style.left = "250px"
        divMoons.style.backgroundColor = planet.color;
        divMoons.style.textAlign = "center"
        planetSection.appendChild(divMoons)

    }
    };