function makeQuestion(rule, ...options) {
  return {
    rule,
    options
  }
}
function makeOption(title, value, code) {
  return {
    title,
    value,
    code
  }
}
const first = makeQuestion('always-semicolon',
  makeOption('Add missing semicolns', 'true',
  `.a {
    color: tomato;
  }`),
  makeOption('Leave code untouched', 'false',
  `.a {
    color: tomato
  }`)
);

const second = makeQuestion('color-case',
  makeOption('Set colors to lowercase', 'lower',
  `.a {
    color: #fff;
    background-color: #ccc;
  }`),
  makeOption('Set colors to uppercase', 'upper',
  `.a {
    color: #FFF;
    background-color: #CCC,
  }`),
  makeOption('Leave code untouched', `' '`,
  `.a {
    color: #FFF;
    background-color: #ccc,
  }`)
);

const third = makeQuestion('color-shorthand',
  makeOption('Expand hexadecimal colors', 'true',
  `.a {
    color: #ffcc00;
    background-color: #cccccc;
  }`),
  makeOption('Expand hexadecimal colors', 'false',
  `.a {
    color: #fc0;
    background-color: #ccc;
  }`),
  makeOption('Leave code untouched', `' '`,
  `.a {
    color: #ffcc00;
    background-color: #ccc;
  }`)
);

export default [first, second, third];
