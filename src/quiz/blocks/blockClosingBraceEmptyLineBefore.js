const var1 = `
a {
  color: pink;

}`;

const var2 = `
a {
  color: pink;
}`;

export default {
  rule: "block-closing-brace-empty-line-before",
  options: [{
      title: "Require an empty line before the closing brace of blocks",
      value: "always-multi-line",
      code: var1
    }, {
      title: "Disallow an empty line before the closing brace of blocks",
      value: "never",
      code: var2
    }
  ]
};
