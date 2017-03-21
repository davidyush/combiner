const var1 = `
a {
  top: 1.01px;
}`;

const var2 = `
a {
  top: 1.000px;
}`;

export default {
  rule: "number-no-trailing-zeros",
  options: [{
      title: "Disallow trailing zeros in numbers",
      value: true,
      code: var1
    }, {
      title: "Allow trailing zeros in numbers",
      value: false,
      code: var2
    }
  ]
};
