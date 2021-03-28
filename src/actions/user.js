import { AUTH, LOGOUT } from './types';

const signUp = formData => {
	return { type: AUTH, payload: formData };
};

const signIn = formData => {
	return { type: AUTH, payload: formData };
};

const logout = history => {
	history.push('/login');
	return { type: LOGOUT };
};

export { signUp, signIn, logout };
