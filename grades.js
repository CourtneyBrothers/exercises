var scores = [82, 71, 95, 98, 69, 72, 78, 84, 64, 58, 87];
aGrade = [];
bGrade = [];
cGrade = [];
dGrade = [];
fGrade = [];
var grade;
for (var i = 0; i < scores.length; i++) {
    if (scores[i] < 60) {
        grade = "F";
        fGrade.push(scores[i]);
        
    } else if (scores[i] < 70){
        grade = "D";
        dGrade.push(scores[i]);
        
    } else if (scores[i]< 80){
        grade = "C";
        cGrade.push(scores[i]);
        
    } else if (scores[i]< 90){
        grade = "B";
        bGrade.push(scores[i]);
        
    } else if (scores[i]< 100){
        grade = "A";
        aGrade.push(scores[i]);
        
    }
    
};
console.log(fGrade,dGrade,cGrade,bGrade,aGrade); //make sure grades are going in correct arrays
console.log(fGrade.length, dGrade.length, cGrade.length, bGrade.length, aGrade.length); // how many of each grade
console.log(fGrade); //what is lowest grade
console.log(Math.max.apply(Math,aGrade));

