// Sum of n natural number 


function addNum(num){
    
    if(num == 0) return 0;
    
    return (num + addNum(num -1))

}

var x = addNum(4)
console.log(x)