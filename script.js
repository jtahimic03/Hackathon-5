const quotesEndpoint = "https://quotes-api-self.vercel.app/quote";

const quoteDivNode = document.querySelector("#data-container");

async function makeRequest(endpoint) {

    try {
        const response = await fetch(endpoint);
        if(!response.ok) {
            throw new Error(`Http error: ${response.status}`);
        };

        return response.json();

    } catch (error) {
        console.error(error.message);
    };
}

async function generateQuotes(quotesEndpoint) {
    
    const quotes = await makeRequest(quotesEndpoint);

    console.log(quotes);

    let quoteContentQuote = `${quotes.quote}`;
    let quoteContentAuthor = `Author: ${quotes.author}` 

    const newQNode = document.createElement("q");
    const newPNode = document.createElement("p");
    newQNode.textContent = quoteContentQuote;
    newPNode.textContent = quoteContentAuthor;
    quoteDivNode.appendChild(newQNode);
    quoteDivNode.appendChild(newPNode);
}

document.querySelector("#get-quotes-button").addEventListener("click", function() {

    quoteDivNode.innerHTML = "";
    generateQuotes(quotesEndpoint);
    
})