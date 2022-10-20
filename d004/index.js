const calcTip = (bill) => {
  if (bill >= 50 || bill <= 300) {
    const plusFivtenn = bill * 0.15;
    return plusFivtenn;
    // console.log(`Your value is ${bill} more 15%: ${plusFivtenn}`);
  } else {
    const plusTwenty = bill * 0.2;
    return plusTwenty;
    // console.log(`Your value is ${bill} more 20%: ${plusTwenty}`);
  }
};

calcTip(100);

const bills = [125, 555, 44];

const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
console.log(tips);

const total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];
console.log(total);
