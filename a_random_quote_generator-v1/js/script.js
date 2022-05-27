/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * fill in the `quotes` array [] with 5 quotes {};
***/
var quotes = [

  {
  quote: 'The best judge of whether or not a country is going to develop is how it treats it\'s women.',
  source: 'President Barack Obama'
  },
  
  {
  quote: 'Change in all things is sweet.' ,
  source: 'Aristotle'
  },
  
  {
  quote: 'I can\'t believe what you say, because I see what you do.',
  source: 'James Baldwin'
  },
  
  {
  quote: 'Learning is a weightless treasure you always carry easy.',
  source: 'Chinese Proverb'
  },
  
  {
  quote: 'As long as poverty, injustice and gross inequality persist in our world, none of us can truly rest.',
  source: 'Nelson Mandela',
  citation: 'Mary Fitzgerald Square, Newtown Johannesburg South Africa',
  year: '2005'
  },
  
  ];


/***
 * `getRandomQuote` function through the array, chose by length
***/
function getRandomQuote(array) {
  var quoteIndex = Math.floor(Math.random() * quotes.length);
  for (var i = 0; i < array.length; i++) {
    var randomQuote = array[quoteIndex];
  }
  return randomQuote;
}


/***
 * `printQuote` function, include <p></p>. <span> was used to put the citation and year on the same line after source. 
***/


function printQuote() {
  const result = getRandomQuote(quotes);
  let message = "<p class='quote'>" + result.quote + "</p>" + "<p class='source'>" + result.source 

    if ("citation" in result) {
    message += "<span class='citation'> " + result.citation + "</span>"
    }  
  
    if ("year" in result) {
    message += "<span class='year'>" + result.year + "</span>" + "</p>"
    }
  
  document.getElementById('quote-box').innerHTML = message;
}

console.log(quotes)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);