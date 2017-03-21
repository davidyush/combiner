const var1 = `
@import url("x.css");
@media (min-width: 700px) {}
`;

const var2 = `
@media
  (min-width: 700px) and
  (orientation: portrait) {}
`;

export default {
  rule: 'at-rule-name-space-after',
  options: [{
      title: "There must always be a single space after at-rule names",
      value: "always",
      code: var1
    }, {
      title: "There must always be a single space after at-rule names in single-line declaration blocks",
      value: "always-single-line",
      code: var2
    }
  ]
};
// no reason.
