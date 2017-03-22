const var1 = `
a {
  color: pink;
}`;

const var2 = `
a {

}`;

export default {
  rule: "block-no-empty",
  options: [{
      title: "Disallow empty blocks",
      value: true,
      code: var1
    }, {
      title: "Allow an empty blocks",
      value: false,
      code: var2
    }
  ]
};
