import { makeQuestion, makeOption } from './helpers'

const blockClosingBraceEmptyLineBefore = makeQuestion("block-closing-brace-empty-line-before",
  makeOption("Require an empty line before the closing brace of blocks",
  "always-multi-line",
  `
  a {
    font: 1em 'Arial', sans-serif;

  }
  span { color: #eee; }
  `),
  makeOption("Disallow empty lines", "never",
  `
  a {
    color: pink;
  }
  span { color: black; }
  `)
);

const blockClosingBraceNewlineAfter = makeQuestion("block-closing-brace-newline-after",
  makeOption("There must always be a newline after the closing brace",
  "always",
  `
  a { color: pink; }
  `),
  makeOption("There must always be a newline after the closing brace in single-line blocks",
  "always-single-line",
  `
  a { color: pink; }
  span { color: red; }
  `
  ),
  makeOption("There must never be whitespace after the closing brace in single-line blocks",
  "never-single-line",
  `
  a { color: pink; }b { color: red; }
  h1 { color: pink;
  } h2 { color: red; }
  `
  ),
  makeOption("There must always be a newline after the closing brace in multi-line blocks",
  "always-multi-line",
  `
  a { color: pink; }b { color: red; }
  h1 { color: pink;
  }
  h2 { color: red; }
  `
  ),
  makeOption("There must never be whitespace after the closing brace in multi-line blocks",
  "never-multi-line",
  `
  a { color: pink; } b { color: red; }
  h1 { color: pink;
  }h2 { color: red; }
  `
  )
);


export default [
  blockClosingBraceEmptyLineBefore,
  blockClosingBraceNewlineAfter
];
