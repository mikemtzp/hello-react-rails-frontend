import getData from './greetingAPI';

// Actions
const SHOW_GREETINGS = 'redux/greetingsReducer.js/SHOW_GREETINGS'

// Reducer
const initialState = [];

export const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

// Action creator
export const displayGreeting = () => async (dispatch) => {
  const greeting = await getData();

  dispatch({
    type: SHOW_GREETINGS,
    payload: greeting,
  });
};