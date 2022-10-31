function filterList(arr) {
    let newArray = arr.filter((item, index)=>{
          
        return typeof item == "number"; 
    
        })
        return newArray;
 }

  module.exports =filterList