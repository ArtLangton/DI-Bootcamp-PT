const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const gifContainer = document.getElementById("gifContainer");
const gifForm = document.getElementById("gifForm");

function fetchRandomGif() {
    const categoryInput = document.getElementById("categoryInput").value;
    const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${categoryInput}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.data) {
                const gifUrl = data.data.images.original.url;
                appendGif(gifUrl, categoryInput);
            } else {
                alert("No GIF found for the specified category.");
            }
        })
        .catch(error => console.error("Error fetching GIF:", error));
}

function appendGif(url, category) {
    const gifElement = document.createElement("div");
    gifElement.innerHTML = `
        <img src="${url}" alt="${category} gif">
        <button onclick="deleteGif(this)">Delete</button>
    `;
    gifContainer.appendChild(gifElement);
}

function deleteGif(button) {
    const gifElement = button.parentNode;
    gifElement.remove();
}

function deleteAllGifs() {
    gifContainer.innerHTML = "";
}
