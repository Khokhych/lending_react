const initialState = {
  switch: true,
};

export default function data(state = initialState, action) {
  if (action.type === 'SWITCH') {
    state.switch ? state.switch = false : state.switch = true;
  }
  return state;
}