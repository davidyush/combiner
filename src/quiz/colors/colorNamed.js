const var1 = `
a {
  color: black;
  background: rgba(0, 0, 0, 0.5);
}`;

const var2 = `
.a {
  color: #ccc;
  background: var(--white);
}`;

export default {
  rule: 'color-named',
  options: [{
      title: "Colors must always, where possible, be named",
      value: "always-where-possible",
      code: var1
    },{
      title: "Colors must never be named",
      value: "never",
      code: var2
    }
  ]
};
