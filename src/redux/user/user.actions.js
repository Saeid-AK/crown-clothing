import { UserActionTypes } from './user.types';

export const googleSignInStart = emailAndPassword => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
  payload: emailAndPassword,
});

export const SignInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const SignInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = () => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
});
