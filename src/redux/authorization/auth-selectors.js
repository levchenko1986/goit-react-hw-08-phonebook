export const getIsAuth = state => state.auth.isLoggedIn;
export const getUserEmail = state => state.auth.user.email;
export const getIsCurrentUser = state => state.auth.isFetchingCurrentUser;
export const authToken = state => state.auth.token;
