const quotesEndpoint = "https://quotes-api-self.vercel.app/quote";

const quoteDivNode = document.querySelector("#data-container");

async function makeRequest(endpoint) {

    try {
        const response = await fetch(endpoint);

        // boolean for response code in 200s rang
        if(!response.ok) {
            // new keyword means an object is being instantiated
            throw new Error(`Http error: ${response.status}`);
        }

        // parse the response object into a JavaScript Object
        return response.json();
    } catch (error) {
        console.error(error.message);
    }
}

async function generateQuotes(quotesEndpoint) {
    
    // async function returns its value as a promise resolution
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