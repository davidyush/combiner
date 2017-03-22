const var1 = `
a { color: pink; }
span {
color: pink; }`;

const var2 = `
a{ color: pink;}
span{
color: pink;}`;

const var3 = `
a { color: pink; }
span {
color: pink;}`;

const var4 = `
a { color: pink;}
span {
color: pink; }`;

const var5 = `
a { color: pink;}
span {
color: pink; }`;

const var6 = `
a { color: pink; }
span {
color: pink;}
`

export default {
  rule: "block-closing-brace-space-before",
  options: [{
      title: "There must always be a single space before the closing brace",
      value: "always",
      code: var1
    }, {
      title: "There must never be whitespace before the closing brace",
      value: "never",
      code: var2
    }, {
      title: "There must always be a single space before the closing brace in single-line blocks",
      value: "always-single-line",
      code: var3
    }, {
      title: "There must never be whitespace before the closing brace in single-line blocks",
      value: "never-single-line",
      code: var4
    }, {
      title: "There must always be a single space before the closing brace in multi-line blocks",
      value: "always-multi-line",
      code: var5
    }, {
      title: "There must never be whitespace before the closing brace in multi-line blocks",
      value: "never-multi-line",
      code: var6
    }
  ]
};
