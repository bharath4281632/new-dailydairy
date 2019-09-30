export const checkAnonymously = userInfo => {
  if (!userInfo) return true;
  if (userInfo.firebase.sign_in_provider === "google.com") return false;
  return true;
};
