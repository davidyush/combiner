export function makeQuestion(rule, ...options) {
  return {
    rule,
    options
  }
}
export function makeOption(title, value, code) {
  return {
    title,
    value,
    code
  }
}
