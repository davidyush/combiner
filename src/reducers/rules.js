const initialState = [];

export default function rules(state = initialState, action) {
  switch(action.type) {
    case 'ADD_RULE':
      return [...state, action.payload];
    default:
      return state;
  }
}
