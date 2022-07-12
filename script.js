// a function to generate random number:
const randNumGenerator = (num) => {
  let randNum = Math.floor(Math.random() * num);
  return randNum;
};

//variables
const astrologyInformation = {
  sign: [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ],
  fortune: [
    "Good Luck!",
    "Mystories... Luck..",
    "Very Good Luck!",
    "Bad Luck!",
    "Very Bad Luck!",
  ],
  advice: [
    "Take time to know yourself",
    "Be patient and persistent",
    "In order to get, you have to give",
    "Be your best at all times.",
    "Don't be afraid of being afraid",
    "Don't make decisions when you are angry or ecstatic",
    "Don't worry what other people think",
    "Do what is right, not what is easy",
    " Believe in yourself",
  ],
};

const timeOfBorn = {
  Aries: "March 21 – April 20",
  Taurus: "April 21 – May 20",
  Gemini: "May 21 – June 21",
  Cancer: "June 22 – July 22",
  Leo: "July 23 – August 22",
  Virgo: "August 23 – September 21",
  Libra: "September 22 – October 22",
  Scorpio: "November 23 – December 21",
  Capricorn: "December 22 – January 20",
  Aquarius: "January 21 – February 19",
  Pisces: "February 20 – March 20",
};

//store message data
let messageData = [];

for (let prop in astrologyInformation) {
  let keyValue = astrologyInformation[prop];
  let randIndex = randNumGenerator(keyValue.length);
  messageData.push(keyValue[randIndex]);
}

//Main function, log the message into the screen
const astrologyMessage = (arr) => {
  let messageToShow = [];
  let birthOfDate = arr[0];
  messageToShow.push(`You were born between ${timeOfBorn[birthOfDate]}Your sign is ${arr[0]}`);
  messageToShow.push(`You are having a ${arr[1]}`);
  messageToShow.push(`Here are the fortune cookie said:${arr[3]}`);
  const messageString = messageToShow.join("\n");
  console.log(messageString);
};

astrologyMessage(messageData)
