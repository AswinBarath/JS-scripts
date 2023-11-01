function largestOfThree(x, y, z) {
  // Compare all 3 numbers
  if (x >= y && x >= z) return x; // Return 1st number if largest
  else if (y >= x && y >= z) return y; // Comparing 2nd no with 1st and 3rd no
  else return z; // Return 3rd no, Its sure it is greatest
}

var a, b, c, largest;

a = 15;
b = 10;
c = 30;

largest = largestOfThree(a, b, c);

console.log(largest + " is the largest number");
