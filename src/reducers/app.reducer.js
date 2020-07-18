import { TOGGLE_ANIMATION } from 'actions/app.actions';

const initialState = {
  animated: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ANIMATION: {
      return {
        ...state,
        animated: !state.animated,
      }
    }
      
  
    default: {
      return state;
    }
  }
}