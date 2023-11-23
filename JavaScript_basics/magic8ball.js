let userName = "Elodie";
const userQuestion = "Is he going to fucking reply?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

userName === "Jane" ? console.log("Hello, Jane!") : console.log("Hello!");
console.log(`${userName} has asked ${userQuestion}`)

switch(randomNumber){
  case 0: eightBall = 'You are hurting yourself sis';
  break;
  case 1: eightBall = 'Seriously, just go back on Tinder';
  break;
  case 2: eightBall = 'It is more likely to be sunny tomorrow than to get a reply';
  break;
  case 3: eightBall = 'Maybe Maybe not, probably not though';
  break;
  case 4: eightBall = 'Not his top priority, but when he is done with laundry, taking a shit, reading the newspaper, and watching TV, he may reply';
  break;
  case 5: eightBall = 'I would not bet my life on it, but I think he may come back to you. Some day';
  break;
  case 6: eightBall = 'Yes, because he still wants to fuck you, so chill out';
  break;
  case 7: eightBall = 'YES. You are the hottest girl alive, how could he live and breathe without you?';
  break;
}

console.log(`The Magic 8 Ball says ${eightBall}`)