import { SET_LOADING } from '../../../actions/loader';

export const defaultState = {
  loading: false,
};

const loading = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

export default loading;
