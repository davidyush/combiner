import { makeQuestion, makeOption } from './helpers'

const colorHexCase = makeQuestion("color-hex-case",
  makeOption("Lowercase",
  "lower",
  `.a {
    color: #fff;
  }`),
  makeOption("Uppercase",
  "upper",
  `.a {
    color: #FFF;
  }`)
);

const colorHexLength = makeQuestion('color-hex-length',
  makeOption("Short hex",
  "short",
  `.a {
    color: #fff;
  }`),
  makeOption("Long hex",
  "long",
  `.a {
    color: #ffffff;
  }`)
);

const colorNamed = makeQuestion('color-named',
  makeOption("Colors must always, where possible, be named",
  "always-where-possible",
  `a {
    color: black;
    background: rgba(0, 0, 0, 0.5);
  }`),
  makeOption("Colors must never be named",
  "never",
  `.a {
    color: #ccc;
    background: var(--white);
  }`)
);

//is false exists?
const colorNoHex = makeQuestion('color-no-hex',
  makeOption("Disallow hex colors",
  true,
  `a {
    color: rgba(0, 0, 0, 1);
  }`),
  makeOption("Allow hex colors",
  false,
  `a {
    color: #dadada;
  }`)
);

//is false exists?
const colorNoInvalidHex = makeQuestion('color-no-invalid-hex',
  makeOption("Disallow invalid hex colors",
  true,
  `a {
    color: #fff1a0;
    background-color: #123450aa;
  }`),
  makeOption("Allow invalid hex colors",
  false,
  `a {
    color: #da;
    background-color: #12345aa;
  }`)
);

export default [
  colorHexCase,
  colorHexLength,
  colorNamed,
  colorNoHex,
  colorNoInvalidHex
];
