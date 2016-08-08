function fibseq(limit, current, last, all){
  var current = current || 1
  var prev = current
  var last = last || 1
  var all = all || []
  all.push(current)
  current = last + current
  if( current < limit )
    return fibseq(limit, current, prev, all)
  return all
}

function isEven(int){
  return int % 2 === 0
}

function sum(a,b){
  return a + b
}

console.log(fibseq(4000000).filter(isEven).reduce(sum))