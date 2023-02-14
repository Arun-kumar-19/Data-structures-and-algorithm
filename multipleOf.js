/* 
Write code to print 
if n is a multiple of m 
or n is not a multiple of m

 For the sample input put it should print

 15 is a multiple of 5
  
 hint: 12%3 gives 0.
*/

let n = 15;
let m = 5;

let output_1 = n + " is a multiple of " + m;
let output_2 = n + " is not a multiple of " + m;

if (n % m === 0) {
  console.log(output_1);
} else {
  console.log(output_2);
}
