const var1 = `
a { /* end-of-line comment */
  color: pink;
}
span {
color: pink; }`;

const var2 = `
a { color: pink; }
span {
color: pink; }`;

const var3 = `
a { color: pink; }
span {color: pink;
}`;

export default {
  rule: "block-opening-brace-newline-after",
  options: [{
      title: "There must always be a newline after the opening brace",
      value: "always",
      code: var1
    }, {
      title: "There must always be a newline after the opening brace in multi-line blocks",
      value: "always-multi-line",
      code: var2
    }, {
      title: "There must never be whitespace after the opening brace in multi-line blocks",
      value: "never-multi-line",
      code: var3
    }
  ]
};
