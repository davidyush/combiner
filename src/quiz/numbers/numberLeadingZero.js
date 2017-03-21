const var1 = `
a {
  line-height: 0.5;
  translate(2px, 0.4px);
}`;

const var2 = `
a {
  line-height: .5;
  translate(2px, .4px);
}`;

export default {
  rule: "number-leading-zero",
  options: [{
      title: "There must always be a leading zero",
      value: "always",
      code: var1
    }, {
      title: "There must never be a leading zero",
      value: "never",
      code: var2
    }
  ]
};
