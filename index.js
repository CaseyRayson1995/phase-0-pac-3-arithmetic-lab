function add(a, b) {
    // Your code here
}

function subtract(a, b) {
    // Your code here
}

function multiply(a, b) {
    // Your code here
}

function divide(a, b) {
    // Your code here
}

//The first line tells us what our function needs to do, and the second line tells us the specific error that is being thrown. 
//Any time you see the error "Expected undefined to equal" something, that means the test is expecting your function to return a value but it's currently not returning anything (undefined). 
//Let's see if we can just get that specific error cleared. 
//We won't worry about exactly what we're returning just yet:
//The add(a, b) tells us the test is trying to pass two arguments to our function, so let's get that set up:
function add() {
    return "something";
  }
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  function increment(n) {
    return n + 1; //imcreasing by 1 
}

function decrement(n) {
    return n - 1;
}

function makeInt(string) {
    
    }

    function preserveDecimal(string) {
        
        }

        function preserveDecimal(string) {
            // Parse the string into a float
            let floatNumber = parseFloat(string);
          
            
            return floatNumber;
          }

          function makeInt(string) {
            return parseInt(string, 10);
          }