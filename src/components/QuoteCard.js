import {useState } from "react";

function QuoteCard (){

const [quote,setQuote] = useState(null);


function getQuote () {
     fetch("api/quote")
        .then(response => response.json())
        .then(data => {
            console.log("Fetched Data: ", data);
            setQuote(data)
        })
        .catch(error =>{
            console.error("Error fetching data:" , error)
        });
}
    
return (
  <div className="QuoteCard">
    <h1>Quote Of The Day</h1>

    <button onClick={getQuote}>
      Get Today's Quote
    </button>

    <p>{quote ? quote.quote : "Click the button to get a quote"}</p>
    <p>{quote && `– ${quote.author}`}</p>
  </div>
);

}

export default QuoteCard;