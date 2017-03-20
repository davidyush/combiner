export function getQuestions(questions) {
  return {
    type: 'GET_QUESTIONS',
    payload: questions
  }
}


export function addRule(rule) {
  return {
    type: 'ADD_RULE',
    payload: rule
  }
}
