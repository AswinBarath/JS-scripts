function bigBrother(){
    function littleBrother() {
      return 'it is me!';
    }
    return littleBrother();
    function littleBrother() {
      return 'no me!';
    }
  }
  
  // Before running this code, what do you think the output is?
  bigBrother();

// Hoisting:
function bigBrother(){
    function littleBrother() {
        return 'no me!';
    }
    return littleBrother();
}

// Before running this code, what do you think the output is?
bigBrother();
// O/P:
// no me!