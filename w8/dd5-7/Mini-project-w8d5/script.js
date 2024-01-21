const quotes = [
    { id: 0, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", likes: 0 },
    { id: 1, author: "Mark Twain", quote: "The secret of getting ahead is getting started.", likes: 0 },
    { id: 2, author: "Maya Angelou", quote: "You will face many defeats in life, but never let yourself be defeated.", likes: 0 },
    { id: 3, author: "Albus Dumbledor", quote: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.", likes: 0 },
    { id: 4, author: "Anastasia Volochkova", quote: "I can't take it anymore. I'm 46 years old!", likes: 0 },
    { id: 5, author: "Beyonce", quote: "Слыш, ты че блин, я не готова ваще! Че это за тарантайка? Я ща выйду тебе не понравится!", likes: 0 },
    { id: 6, author: "The Great CoCo Chanel", quote: "I will think about it tomorrow", likes: 0 },
  ];
  
  let previousQuoteId;
  
  const getRandomQuote = () => {
    let randomId;
    do randomId = Math.floor(Math.random() * quotes.length);
    while (randomId === previousQuoteId);
    
    previousQuoteId = randomId;
    return quotes[randomId];
  };
  
  const displayQuote = (quote) => {
    const quoteSection = document.getElementById('quoteSection');
    quoteSection.textContent = `"${quote.quote}" - ${quote.author}`;
  };
  
  const addQuote = () => {
    const quoteInput = document.getElementById('quoteInput').value;
    const authorInput = document.getElementById('authorInput').value;
  
    if (quoteInput && authorInput) {
      const newQuote = { id: quotes.length, author: authorInput, quote: quoteInput, likes: 0 };
      quotes.push(newQuote);
      document.getElementById('quoteInput').value = '';
      document.getElementById('authorInput').value = '';
    }
  };
  
  const getCharCount = (includeSpaces) => {
    const currentQuote = quotes[previousQuoteId].quote;
    const charCount = includeSpaces ? currentQuote.length : currentQuote.replace(/\s/g, '').length;
    alert(`Character Count: ${charCount}`);
  };
  
  const getWordCount = () => {
    const currentQuote = quotes[previousQuoteId].quote;
    const wordCount = currentQuote.split(/\s+/).filter(Boolean).length;
    alert(`Word Count: ${wordCount}`);
  };
  
  const likeQuote = () => {
    const currentQuote = quotes[previousQuoteId];
    currentQuote.likes++;
    alert(`You liked this quote! Likes: ${currentQuote.likes}`);
  };
  
  const filterQuotes = () => {
    const authorFilter = document.getElementById('authorFilter').value.toLowerCase();
    const filteredQuotes = quotes.filter(quote => quote.author.toLowerCase() === authorFilter);
    if (filteredQuotes.length > 0) displayQuote(filteredQuotes[0]);
    else alert(`No quotes found for author: ${authorFilter}`);
  };
  
  const navigateFilteredQuotes = (direction) => {
    const filteredQuotes = quotes.filter(quote => quote.author.toLowerCase() === authorFilter);
    if (filteredQuotes.length === 0) return;
  
    filteredIndex = (filteredIndex + direction + filteredQuotes.length) % filteredQuotes.length;
    displayQuote(filteredQuotes[filteredIndex]);
  };
  
  document.getElementById('generateQuoteBtn').addEventListener('click', () => displayQuote(getRandomQuote()));
  document.getElementById('addQuoteBtn').addEventListener('click', addQuote);
  document.getElementById('charCountBtn').addEventListener('click', () => getCharCount(true));
  document.getElementById('charCountNoSpaceBtn').addEventListener('click', () => getCharCount(false));
  document.getElementById('wordCountBtn').addEventListener('click', getWordCount);
  document.getElementById('likeBtn').addEventListener('click', likeQuote);
  document.getElementById('filterBtn').addEventListener('click', filterQuotes);
  document.getElementById('prevQuoteBtn').addEventListener('click', () => navigateFilteredQuotes(-1));
  document.getElementById('nextQuoteBtn').addEventListener('click', () => navigateFilteredQuotes(1));
  