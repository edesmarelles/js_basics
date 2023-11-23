let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
let age = 18;

if (age > 18 && registeredEarly){
  raceNumber += 1000;
}

if (age > 18 && registeredEarly){
  console.log(`Race will begin at 9:30 am and your race number is: ${raceNumber}`);
}
else if (age > 18 && !registeredEarly){
  console.log(`Race will begin at 11:00 am and your race number is: ${raceNumber}`);
}
else if (age < 18){
  console.log('Youth registrants run at 12:30 pm (regardless of registration)');
}
else {
  console.log('Go to the registration desk');
}