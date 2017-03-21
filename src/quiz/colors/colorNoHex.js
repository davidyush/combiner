const var1 = `
a {
  color: rgba(0, 0, 0, 1);
}`;

const var2 = `
a {
  color: #dadada;
}`;

export default {
  rule: 'color-no-hex',
  options: [{
      title: "Disallow hex colors",
      value: true,
      code: var1
    },{
      title: "Allow hex colors",
      value: false,
      code: var2
    }
  ]
};
