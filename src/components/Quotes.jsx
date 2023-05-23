import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [randomColor, setRandomColor] = useState('');
  const [fade, setFade] = useState(0);

  useEffect(() => {
    getQuote();
  }, []);

  const changeColor = () => {
    const colors = [
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857',
    ];
    const randomColors = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomColors];
    setRandomColor(randomColor);
    document.body.style.backgroundColor = randomColor;
  };
  const getQuote = () => {
    let url =
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
        setFade(1);
      });
  };

  const handleClick = () => {
    changeColor();
    setFade(0);
    setTimeout(() => {
      getQuote();
    }, 500);
  };
  return (
    <div id="quote-box">
      <div
        id="text"
        style={{
          opacity: fade,
          transition: 'opacity 0.5s',
          color: randomColor,
        }}
      >
        <p>
          <i className="fa fa-quote-left"></i> {quote}
        </p>
      </div>

      <div
        id="author"
        style={{
          opacity: fade,
          transition: 'opacity 0.5s',
          color: randomColor,
        }}
      >
        <p>- {author}</p>
      </div>

      <div id="buttons">
        <div className="social-media">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
              '"' + quote + '" \n\n' + author + '\n',
            )}`}
            target="top"
            id="tweet-quote"
            title="Tweet this quote"
          >
            <i
              className="fa-brands fa-square-twitter"
              style={{ color: randomColor }}
            ></i>
          </a>
          <a
            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(
              author,
            )}&content=${encodeURIComponent(quote)}`}
            target="top"
            id="tumblr-quote"
            title="Post this quote on tumblr"
          >
            <i
              className="fa-brands fa-square-tumblr"
              style={{ color: randomColor }}
            ></i>
          </a>
          <button
            onClick={handleClick}
            style={{ backgroundColor: randomColor }}
            id="new-quote"
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
