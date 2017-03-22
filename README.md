## Combiner

This is a tool to generate stylelint file just like
[cssComb](http://csscomb.com/config).

More information about [Stylelint](https://stylelint.io)

For now I've made several questions about colors and blocks and looking
for better architecture to make quiz.

![Looks like this](public/screen4.png)

---

I used ```create-react-app```

To run the example
```
npm install
npm start
```
---
### Opinion

i dont know exactly what kind of rules should be.

List of rules for now:

#### colors
- color-hex-case
- color-hex-length
- color-named
- color-no-hex
- color-no-invalid-hex

#### strings
- string-no-newline
- string-quotes

#### numbers
- number-leading-zero
- number-no-trailing-zeros

#### at-rules
- at-rule-name-case
- at-rule-name-space-after

#### blocks
- block-closing-brace-empty-line-before
- block-closingbrace-newline-before
- block-closing-brace-space-before
- block-no-empty
- block-opening-brace-newline-after
- block-opening-brace-newline-before
- block-opening-brace-space-after
- block-opening-brace-space-after
