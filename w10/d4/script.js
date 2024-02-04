const sayHey = () => {
  console.log('hey');
};

const displayError = (error) => {
  const paragraph = document.querySelector("#gif_cont");
  paragraph.textContent = `We have a problem ${error}`;
};

const displayGifInfo = (gifInfo) => {
  const { id, rating, title } = gifInfo[0];
  const paragraph = document.querySelector("#gif_cont");
  paragraph.textContent = `GIF ID: ${id} ${rating} ${title}`;
};

const getGif = async () => {
  const api_key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
  const dataUrl = 'https://api.giphy.com/v1/gifs/search';
  const limit = 10;
  const offset = 2;
  const q = "sun";
  const rating = "g";
  const fullUrl = `${dataUrl}?q=${q}&limit=${limit}&offset=${offset}&api_key=${api_key}`;

  try {
      const response = await fetch(fullUrl);
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
      const data = await response.json();
      displayGifInfo(data.data);
  } catch (error) {
      displayError(error);
  }
};

function resolveAfter2Seconds() {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve('resolved');
      }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  let result = await resolveAfter2Seconds();
  console.log(result);
}


sayHey();
getGif();
asyncCall();
