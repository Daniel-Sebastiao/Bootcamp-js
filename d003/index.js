// Dolpins vs Koalas

const calcAverage = (firstData, secondData, thirdData) => {
  const average = (firstData + secondData + thirdData) / 3;
  return average;
};

const checkWinner = (avgDolphins, avgKoalas) => {
  // Average
  avgDolphins = calcAverage(85, 54, 41);
  avgKoalas = calcAverage(23, 34, 27);

  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins Wins🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas Wins🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No one wins😭");
  }
};

checkWinner();
