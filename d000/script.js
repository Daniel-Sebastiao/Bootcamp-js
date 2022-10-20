let massMark = '78Kg';
let massJohn = '92Kg';
let heightMark = '1.69m';
let heightJohn = '1.95m';

function calculatorBMI(mass,height){
    let BMI = mass / (height**2);
    return BMI;
    
}

let markBMI = calculatorBMI(parseInt(massMark),parseFloat(heightMark));
let johnBMI = calculatorBMI(parseInt(massJohn),parseFloat(heightJohn));

if(markBMI > johnBMI){
    let markHigherBMI = true;
    console.log(`The Mark BMI is higher than John for it the result is ${markHigherBMI}`);
}else{
    markHigherBMI = false;
    console.log(`The Mark BMI is not higher than John for it the result is ${markHigherBMI}`);
}
console.log(`Mark Mass is ${massMark} and the Mark height is 
${heightMark}`);

console.log(`John Mass is ${massJohn} and the John height is ${heightJohn}`);
console.log(`The Mark BMI is ${markBMI}`);
console.log(`The John BMI is ${johnBMI}`);