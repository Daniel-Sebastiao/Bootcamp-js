const firstPerson = {
  fullName: ["Mark", "Miller"],
  mass: "78 kg",
  height: "1.69 m",

  calcBMI: function () {
    const BMI = parseInt(this.mass) / (parseFloat(this.height) ** 2);
    return BMI.toFixed(2);
  },
};

const secondPerson = {
  fullName: ["John", "Smith"],
  mass: "92 Kg",
  height: "1.95 m",

  calcBMI: function () {
    const BMI = parseInt(this.mass) / (parseFloat(this.height) ** 2);
    return BMI.toFixed(2);
  },
};


if (firstPerson.calcBMI() > secondPerson.calcBMI()) {
  console.log(
    `${
      firstPerson.fullName[0]
    }´s BMI (${firstPerson.calcBMI()}) is higher than ${
      secondPerson.fullName[0]
    }´s (${secondPerson.calcBMI()})!`
  );
} else {
  console.log(
    `${
      secondPerson.fullName[0]
    }´s BMI (${secondPerson.calcBMI()}) is higher than ${
      firstPerson.fullName[0]
    }´s (${firstPerson.calcBMI()})!`
  );
}



