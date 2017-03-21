const var1 = `
@media (min-width: 50em) {}
`;

const var2 = `
@MEDIA (min-width: 50em) {}
`;

export default {
  rule: 'at-rule-name-case',
  options: [{
      title: "Specify lowercase for at-rules names",
      value: "lower",
      code: var1
    }, {
      title: "Specify uppercase for at-rules names",
      value: "upper",
      code: var2
    }
  ]
};
