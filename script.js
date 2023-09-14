const quote = document.querySelector("#quote");
const person = document.querySelector("#person");
const newQuote = document.querySelector("#newQuote");
const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: `Mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to goal, not to people or things."`,
    person: `Albert Einstein`
}, {
    quote: `"At his best, man is the noblest of all animals; separated from law ad justice he is the worst."`,
    person: `Aristotle`
}, {
    quote: `"Your time is limited, so don't waste it living someone else's life."`,
    person: `Steve Jobs`
}, {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: `Benjamin Franklin`
}, {
    quote: `"If you look at what you have in life, you will always have more. If you look what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`
}, {
    quote: `"It does not matter how slowly you go as you do not stop."`,
    person: `Confucius`
}, {
    quote: `"Our lives begin to end the day we become silent about things matter."`,
    person: `Martin LUther King, Jr.`
}, {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
    person: `Dalai Lama`
}, {
    quote: `"The journey of a thousand miles begins with one step."`,
    person: `Lao Tzu`
} ];

newQuote.addEventListener("click", changeQuote);

changeQuote();
function changeQuote(){
    let randQuote = Math.floor(Math.random() * quotes.length);
    
    quote.textContent = quotes[randQuote].quote;
    person.textContent = quotes[randQuote].person;
}
