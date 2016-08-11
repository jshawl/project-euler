function isPalindrome(int){
  var str = int + ""
  if(str[0] != str[str.length - 1]){
    return false
  }
  var strs = str.split("")
  strs.shift()
  strs.pop()
  if (strs.length == 0) return true
  return isPalindrome(strs.join(""))
}

function productsFromThreeDigitNumbers(){
  var products = []
  for(var i = 999; i > 99; i--)
    for(var j = 999; j > 99; j--)
      if(isPalindrome(i*j)) products.push( i * j)
  return products
}

function asc(a,b){
  if(a < b) return -1
  if(a > b) return 1
  return 0
}

console.log(productsFromThreeDigitNumbers().sort(asc).pop())