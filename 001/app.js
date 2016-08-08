function numbers(n, i, arr){
  var arr = arr || []
  var i =  i || 0
  arr.push(i)
  i++
  if(n == i){
    return arr
  }
  return numbers(n, i, arr)
}

function multipleOf3or5(int){
  return int % 3 === 0 || int % 5 === 0
}

function sum(a,b){
  return a + b
}

console.log(numbers(1000).filter(multipleOf3or5).reduce(sum))