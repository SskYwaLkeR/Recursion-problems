
//find number in an array

function findNumArr(list, itm){
  
    let length = list.length - 1; 
    
    if(length == -1) return 'no item '
    if(list[length] == itm) return 'item found'
    let newArr = list.slice(0,length)
    // list.pop()
    return findNumArr(list, itm)
    
  }

  findNumArr([1,2,3, 7], 2)