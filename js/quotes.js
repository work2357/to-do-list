const quotes = [
    {
        quote: "We don't know a millionth of one percent about anything.",
        author: "Thomas A. Edison"
    },
    {
        quote: "Luxury must be comfortable, otherwise it is not luxury.",
        author: "Gabriel Coco Chanel"
    },
    {
        quote: "Most people are about as happy as they make up their minds to be.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Hope begins in the dark, the stubborn hope that if you just show up and try to do the right thing, the dawn will come. You wait and watch and work: You don't give up.",
        author: "Anne Lamott"
    },
    {
        quote: "Whatever you do, do cautiously, and look to the end.",
        author: "Unknown"
    },
    {
        quote: "Reputation is what other people know about you. Honor is what you know about yourself.",
        author: "Lois McMaster Bujold"
    },
    {
        quote: "Anger makes you smaller, while forgiveness forces you to grow beyond what you were.",
        author: "Cherie Carter-Scott"
    },
    {
        quote: "If you can't make it good, at least make it look good.",
        author: "Bill Gates"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;