const initialState = {};

export default function data(state = initialState, action) {
  if (action.type === 'ADD_DATA') {
    state = action.payload;
  }
  return state;
}