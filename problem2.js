// Calculate factorial of n number

function factorial(num){
    if(num == 1 ) return 1
    return num * factorial(num-1)
}
var fact = factorial(5)
console.log(fact)