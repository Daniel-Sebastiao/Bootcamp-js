// Dolphins Scores
const firstDolphScore = 97;
const secondDolphScore = 102;
const thirdDolphScore = 101;

// Koalas Scores
const firstKoalScore = 102;
const secondKoalScore = 97;
const thirdKoalScore = 101;


function averageScoreCalc(firstScore,secondScore,thirdScore){
    let divisionValue = 3;

    // Scores less than one hundred(100)
    if(firstScore < 100){
        firstScore = 0;
        console.log('The First Score is less than 100');

        divisionValue--;

    }if(secondScore < 100){
        secondScore = 0;
        console.log('The second Score is less than 100');

        divisionValue--;

    }if(thirdScore < 100){
        thirdScore = 0;
        console.log('The Third Score is less than 100');

        divisionValue--;
    }

    // Average Score
    let averageScore = ((firstScore + secondScore + thirdScore) / divisionValue);


    return averageScore;
}

// Average Score each Dolphins and Koalas
const dolphAverageScore = averageScoreCalc(firstDolphScore,secondDolphScore,thirdDolphScore);
const koalAverageScore = averageScoreCalc(firstKoalScore,secondKoalScore,thirdKoalScore);


// Printing result
if(dolphAverageScore > koalAverageScore && dolphAverageScore >= 100){
    console.log(`Dolphins Wins the Trophy🥳 and your average is ${dolphAverageScore} points`);
}else if(dolphAverageScore < koalAverageScore && koalAverageScore >= 100){
    console.log(`Koalas Wins the Trophy🥳 and your average is ${koalAverageScore} points`);
}else if(dolphAverageScore == koalAverageScore){
    console.log(`Had a draw nobody win the Trophy😢`);
}else{
    console.log(`Internal Error`);
}
