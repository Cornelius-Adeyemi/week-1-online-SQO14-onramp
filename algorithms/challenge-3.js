function sumMix(arr) {
   
    let sum = arr.reduce((pr, ci, index)=>{

        return pr + parseInt(ci)
    },0)
        
    
    return sum;
 }

  module.exports = sumMix