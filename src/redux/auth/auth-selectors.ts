const getName = (state: any) => state.auth.user.name;
const getIsLOggedIn = (state: any) => state.auth.isLoggedIn;
const getIsFetchingCurrent = (state: any) => state.auth.isFetchingCurrentUser

const authSelectors = {
  getName,
  getIsLOggedIn,
  getIsFetchingCurrent,
};

export default authSelectors;