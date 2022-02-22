const loadsQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQutes(data));
}
loadsQuote();
const displayQutes = quote => {
    const quoteElements = document.getElementById('quote');
    quoteElements.innerText = quote.quote;
    //console.log(quote);
}