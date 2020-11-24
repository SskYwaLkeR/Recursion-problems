// calculate n to the m power

function powah(n, m){
    if(m == 0) return 0
     if(m == 1) return n
     return n * powah(n, m-1)
   }
  let res =  powah(2,3)
   console.log(res)