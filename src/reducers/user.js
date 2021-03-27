import { AUTH, LOGOUT } from '../actions/types';
import { saveItem } from '../helpers/storage';

const USER = 'USER';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case AUTH:
      saveItem(USER, { ...action.payload });
      return { ...state, ...action.payload };

    case LOGOUT:
      localStorage.removeItem(USER);
      return null;

    default:
      return state;
  }
};

export default userReducer;
