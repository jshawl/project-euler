function primeFactors(n){
  var factors = []
  var divisor = 2
  while(n>1){
    while(n%divisor === 0){
      factors.push(divisor)
      n = n / divisor
    }
    divisor = divisor + 1
  }
  return factors
}

console.log(primeFactors(600851475143).pop())