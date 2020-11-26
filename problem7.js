// find max number in an array

function findMax(arr){
  
    let length = arr.length - 1;
    let max = arr[length];
    
    
    if(length == 0 ) return max
    if(max > arr[length - 1]){
      
      let kms = arr.splice(length-1, 1)
      
      return findMax(arr)
    }else{
      max = arr[length - 1]
      arr.pop()
      return findMax(arr)
    }
  }
  
  findMax([5,9,10,4,8,11,2,41,2,7])
  