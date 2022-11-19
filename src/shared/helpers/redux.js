export const pendingCallback = store => {
  store.loading = true;
  store.error = null;
};
export const errorCallback = (store, { payload }) => {
  store.loading = false;
  store.error = payload;
};
export const fulfilledCallback = (store, { payload }) => {
  store.loading = false;
  store.user = payload;
  store.token = payload.token;
  store.isLogin = true;
};
