document.addEventListener('DOMContentLoaded', () => {
    const loadingIcon = document.getElementById('loadingIcon');
    const resultsContainer = document.getElementById('results');
    const searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', async () => {
        try {
            loadingIcon.style.display = 'block';

   
            const data = await fetchData();

  
            displayResults(data);

        } catch (error) {
            console.error('An error occurred:', error.message);
        } finally {
            loadingIcon.style.display = 'none';
        }
    });

   
    async function fetchData() {
        return new Promise(resolve => {
            setTimeout(() => {
                const mockData = [
                    { name: 'Luke Skywalker', gender: 'Male', height: '172', birth_year: '19BBY', homeworld: 'Tatooine' },
                    { name: 'Leia Organa', gender: 'Female', height: '150', birth_year: '19BBY', homeworld: 'Alderaan' },
                 
                ];
                resolve(mockData);
            }, 1000); 
        });
    }

  
    function displayResults(data) {
        resultsContainer.innerHTML = ''; 
        data.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.innerHTML = `
                <h3>${character.name}</h3>
                <p>Gender: ${character.gender}</p>
                <p>Height: ${character.height} cm</p>
                <p>Birth Year: ${character.birth_year}</p>
                <p>Homeworld: ${character.homeworld}</p>
                <hr>
            `;
            resultsContainer.appendChild(characterDiv);
        });
    }
});
