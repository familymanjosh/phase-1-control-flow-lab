function scuberGreetingForFeet(someNumber){
  if (someNumber<=400) {
    return 'This one is on me!'
    
  }
  if(someNumber<=2000){
    return 'That will be twenty bucks.'
  }
  if(someNumber<2500){
    return 'I will gladly take your thirty bucks.'
  }
  if(someNumber>2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(NYC){
  let city = (NYC)
  return city=='NYC' ? 'Ok, sounds good.' : 'No go.';
  }

  // Write your code here!
function switchOnCharmFromTip(tip){
  switch (tip){
  case "generous": 
  return "Thank you so much.";
  case "not as generous": 
  return "Thank you.";
  case "thanks for everything": 
  return "Bye.";
  default: "Thank you so much."
   }
  }