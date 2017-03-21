const var1 = `
a {
  font-family: 'Times New Roman';
}`;

const var2 = `
a {
  font-family: "Times New Roman";
}`;


export default {
  rule: "string-quotes",
  options: [{
      title: "Disallow (unescaped) newlines in strings",
      value: "single",
      code: var1
    }, {
      title: "Allow newlines in strings",
      value: "double",
      code: var2
    }
  ]
};
