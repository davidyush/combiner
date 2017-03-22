const var1 = `
a {
color: pink;
}
span { color: pink;
}`;

const var2 = `
a { color: pink; }
a { color: pink;
}`;

const var3 = `
a { color: pink; }
span {
color: pink;}`;

export default {
  rule: "block-closing-brace-newline-before",
  options: [{
      title: "There must always be a newline before the closing brace",
      value: "always",
      code: var1
    }, {
      title: "There must always be a newline before the closing brace in multi-line blocks",
      value: "always-multi-line",
      code: var2
    }, {
      title: "There must never be whitespace before the closing brace in multi-line blocks",
      value: "never-multi-line",
      code: var3
    }
  ]
};
