const var1 = `
a {
  font-family: "Times New Roman";
}`;

const var2 = `
a {
  font-family: "Times
    New
    Roman";
}`;


export default {
  rule: "string-no-newline",
  options: [{
      title: "Disallow (unescaped) newlines in strings",
      value: true,
      code: var1
    }, {
      title: "Allow newlines in strings",
      value: false,
      code: var2
    }
  ]
};
