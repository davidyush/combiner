const var1 = `
a {
  color: #fff1a0;
  background-color: #123450aa;
}`;

const var2 = `
a {
  color: #da;
  background-color: #12345aa;
}`;

export default {
  rule: 'color-no-invalid-hex',
  options: [{
      title: "Disallow invalid hex colors",
      value: true,
      code: var1
    },{
      title: "Allow invalid hex colors",
      value: false,
      code: var2
    }
  ]
};
