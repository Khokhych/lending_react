const initialState = {
  formSinginLogin: {
    open: false,
    name: 'login',
  },
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case 'FORM_SINGIN-LOGIN-CLOSE':
      state.formSinginLogin.open = false;
      break;
    case 'FORM_SINGIN-LOGIN-OPEN':
      state.formSinginLogin.open = true;
      state.formSinginLogin.name = action.payload;
      break;
    case 'FORM_SINGIN-LOGIN-CHANGEFORM':
      state.formSinginLogin.name = state.formSinginLogin.name === 'login' ? 'singin' : 'login';
      break;
    default:
  }

  return state;
}