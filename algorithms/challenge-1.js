function countTruthy(arr) {


    let num = 0;

    arr.forEach((item)=>{
    
        if(item){
            num++
        }
        
    })
    
    return num

}
module.exports = countTruthy