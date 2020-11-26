// calc sum of elements of an array




function arrSum(arr){
  
  
    let length = arr.length - 1 
   
    if(length == 0) return arr[0]
    let newArr = arr.slice(0, length)
   
    
   
    return arr[length] + arrSum(newArr)
    
  }
  
  
  
  arrSum([4,5,11])