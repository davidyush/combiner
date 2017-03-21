const var1 = `
.a {
  color: #fff;
}`;

const var2 = `
a {
  color: #FFF;
}`;

export default {
  rule: 'color-hex-case',
  options: [{
      title: "Lowercase",
      value: "lower",
      code: var1
    },{
      title: "Uppercase",
      value: "upper",
      code: var2
    }
  ]
};
