const var1 = `
.a {
  color: #fff;
}`;

const var2 = `
a {
  color: #ffffff;
}`;

export default {
  rule: 'color-hex-length',
  options: [{
      title: "Short hex",
      value: "short",
      code: var1
    },{
      title: "Long hex",
      value: "long",
      code: var2
    }
  ]
};
