// Episode 1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
}

printName();

// the variable is set to Keith. The function 'printName' is called. 'printName' looks for a value for 'name', can't find it within the function so then looks globally. The output is 'My name is Keith'

////////////////////////////////////////////////////

// Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
}

console.log(result());

// As above a variable is set outside the function. This time there is another qualifying variable within the function. When 'result' is called it uses the 'score' variable within the function. The output is '3'.

////////////////////////////////////////////////////

// Episode 3

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
}

allSuspects();
console.log( 'Suspect three is:' + suspectThree )

// Variable are set outside the function. When 'allSuspects' is run it uses the outside varaibles except in the case of 'suspectThree' where it uses one from within the function. The output is 'Suspects include Jay, Val, Harvey, Rick'
// The console.log at line 43 uses the variable 'suspectThree' from outside the function as it's global.

/////////////////////////////////////////////////////

// Episode 4

var detective = {
    name : 'Ace Ventura',
    pet : 'monkey'
  }

var printName = function(detective) {
  return detective.name
}

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
}

console.log(detectiveInfo());

// The function 'detectiveInfo' sets detective name to Poirot in the 'detective' function. 
// The console.log at line 66 calls detective and overides the value for detective name. So, the output is 'Poirot'

// ///////////////////////////////////////

// Episode 5

var murderer = 'rick';

var outerFunction = function(){
  var murderer = 'marc';

  var innerFunction = function(){
    murderer = 'valerie';
  }

  innerFunction();
}


outerFunction();
console.log('the murderer is ', murderer);

// The variable murderer is set to 'rick' outside of any functions. The console.log on line 88 then uses this value when outputting 'the murderer is rick'.
// The outerFunction and innerFunction both change the value for the murderer but do not affect the console.log.

//  Episode 6

var outerFunction = function(){
   var accomplice = 'Lance';

  var innerFunction = function(){
    var accomplice = 'Dwight';
      
  }

  innerFunction();
  return dies();
}

outerFunction();

function dies(){
  accomplice = 'ack... cough... choke....';
}


console.log('and he had help from...', accomplice);

// Whodunnit?