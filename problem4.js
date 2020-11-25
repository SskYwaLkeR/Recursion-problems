// find nth fibonacci number recursively



function fibo(n){
   
    if(n == 0) return 0
    if(n==1) return n
    return  fibo(n-2) + fibo(n-1)

}

let res = fibo(2)
console.log(res)