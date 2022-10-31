function calculateGrade(marks) {
 
    let lengthOfArray = marks.length;
    let sum = marks.reduce((pr,ci,index)=>{
        return pr + ci;
    },0);

    let averageScore = sum/lengthOfArray;

    if(averageScore< 50) return "F";
    if(averageScore>49 && averageScore< 60) return "E";
    if(averageScore>59 && averageScore< 70) return "D";
    if(averageScore>69 && averageScore< 80) return "C";
    if(averageScore>79 && averageScore< 90) return "B";
    if(averageScore>89 && averageScore<= 100) return "A";
 }
  module.exports =calculateGrade
