// function for division
// use loop
function divide(dividend, diviser){
    let quotient = 0;
    for (let i = dividend; i>0 ; i-=diviser){   
     quotient++
    } return quotient
}
console.log(divide(20,5));

//function for multiplication, use "while loop"
function multiply(multiplicand, multiplier){
  let product = 0
  for (let i = 0; i < multiplier; i++){
    product += multiplicand
  } return product
}
console.log(multiply(6,3))

//function for exponents
  function result(base, exponent) {
    let result = 1;
    for (i = 0; i < exponent; i++) {
    result *= base;
    }
    return result;
} 
console.log(result(2,6))

///log base of 2 and base 10
function logarithm(num, base){
  let log = 0
  for (let i = num; i>=base; i/=base ){
    log++
  } return log
  };
  console.log(logarithm(1000,10))
  console.log(logarithm(36,6))
  //while???
