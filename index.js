// Code your solutions in this file
// Thank you messages assignment
const names = ["Guadalupe", "Ollie", "Aki"];
const event = "suprise";

function writeCards(names, event) {
  const tyMessage = [];

  for (let i = 0; i < names.length; i++) {
    tyMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  } 
  return tyMessage;
}

console.log(writeCards(names, "surprise"));

// Countdown Assignment
function countDown(number) {
  while (number >=  0) {
    console.log(number--);
  }
   }
   console.log(countDown(35));

 


