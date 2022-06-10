let quotes = [
  "Knowing yourself is the beginning of all wisdom.",
  "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
  "What is a friend? A single soul dwelling in two bodies.",
  "Educating the mind without educating the heart is no education at all.",
  "Hope is a waking dream.",
  "No great mind has ever existed without a touch of madness.",
  "Happiness depends upon ourselves.",
  "Anybody can become angry — that is easy, but to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way — that is not within everybody's power and is not easy.",
  "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives - choice, not chance, determines your destiny.",
  "A friend to all is a friend to none.",
  "Wishing to be friends is quick work, but friendship is a slow ripening fruit.",
  "Happiness is the meaning and the purpose of life, the whole aim and end of human existence.",
  "Those who educate children well are more to be honored than they who produce them; for these only gave them life, those the art of living well.",
  "Patience is bitter, but its fruit is sweet.",
  "To perceive is to suffer.",
  "He who has overcome his fears will truly be free.",
  "Those who know, do. Those that understand, teach.",
  "The educated differ from the uneducated as much as the living differ from the dead.",
  "Whosoever is delighted in solitude, is either a wild beast or a god.",
  "I count him braver who overcomes his desires than him who conquers his enemies, for the hardest victory is over self.",
  "Poverty is the parent of revolution and crime.",
  "The aim of art is to represent not the outward appearance of things, but their inward significance.",
  "It is not enough to win a war; it is more important to organize the peace",
  "The antidote for fifty enemies is one friend.",
  "The high-minded man must care more for the truth than for what people think.",
  "Pleasure in the job puts perfection in the work.",
  "To write well, express yourself like the common people, but think like a wise man.",
  "One swallow does not make a summer, neither does one fine day; similarly one day or brief time of happiness does not make a person entirely happy.",
  "Learning is not child's play; we cannot learn without pain.",
  "Man is by nature a social animal; an individual who is unsocial naturally and not accidentally is either beneath our notice or more than human. Society is something that precedes the individual. Anyone who either cannot lead the common life or is so self-sufficient as not to need to, and therefore does not partake of society, is either a beast or a god. ",
];

let firstHeading = (document.querySelector("h1").innerHTML =
  "Words of Affirmation App.");

// //let firstStyle = (document.querySelector("body").style.backgroundColor =
//   "grey");
//let first = document.body.children[0];
//first.innerHTML = "This is my message App.!";
//first.parentNode.style.backgroundColor = "beige";

const quoteGenerator = (quotes) => {
  let thoughts = "";
  let num = Math.floor(Math.random() * 30);

  for (let i = 0; i < quotes.length; i++) {
    thoughts = quotes.indexOf(num);

    if (quotes.at(num) === num) {
      return `Arisrotle  Greek phylosophor said: ${quotes}`;
    } else {
      return `Aristotle said: ${quotes.at(num)}`;
    }
  }
};

let button = document.getElementById("btn");
let fortune = document.getElementById("fortune");

const showQuotes = () => {
  fortune.innerHTML = quoteGenerator(quotes);
  button.innerHTML = "Come back tomorrow!";
  button.style.cursor = "default";

  button.removeEventListener("click", showQuotes);
};

button.addEventListener("click", showQuotes);

quoteGenerator(quotes);
