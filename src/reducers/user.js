import { AUTH, LOGOUT } from '../actions/types';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case AUTH:
      return { ...state, ...action.payload };

    case LOGOUT:
      return null;

    default:
      return state;
  }
};

export default userReducer;
