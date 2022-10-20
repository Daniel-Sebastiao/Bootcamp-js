const massMark = '95Kg';
const massJohn = '85Kg';
const heightMark = '1.88m';
const heightJohn = '1.76m';

function calculatorBMI(mass,height){
    const BMI = mass / (height**2);
    return BMI;
    
}

const markBMI = calculatorBMI(parseInt(massMark),parseFloat(heightMark));
const johnBMI = calculatorBMI(parseInt(massJohn),parseFloat(heightJohn));

if(markBMI > johnBMI){
    const markHigherBMI = true;
    console.log(`The Mark BMI is higher than John for it the result is '${markHigherBMI}'`);
}else{
    markHigherBMI = false;
    console.log(`The Mark BMI is not higher than John for it the result is '${markHigherBMI}'`);
}

console.log(`Mark Mass is ${massMark} and the Mark height is ${heightMark}`);
console.log(`John Mass is ${massJohn} and the John height is ${heightJohn}`);

console.log(`The Mark BMI is ${markBMI.toFixed(2)}`);
console.log(`The John BMI is ${johnBMI.toFixed(2)}`);