const apiKey = 'fa77111eb15a7b82353da71b';

async function getExchangeRate(fromCoin, toCoin) {
  const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCoin}/${toCoin}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error in the request: ${response.status}`);
    }

    const { conversion_rate } = await response.json();

    displayResult(fromCoin, toCoin, conversion_rate);
  } catch (error) {
    handleError(error);
  }
}

function displayResult(fromCoin, toCoin, rate) {
  document.getElementById('result').innerHTML = `<p>Exchange rate from ${fromCoin} to ${toCoin}: ${rate}</p>`;
}

function handleError(error) {
  console.error('An error occurred:', error.message);
  throw error;
}

document.getElementById('exchangeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const fromCurrency = document.getElementById('fromCurrency').value.toUpperCase();
  const toCurrency = document.getElementById('toCurrency').value.toUpperCase();

  getExchangeRate(fromCurrency, toCurrency);
});
