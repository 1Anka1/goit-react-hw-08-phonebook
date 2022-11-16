export const pendingCallback = store => {
  store.loading = true;
  store.error = null;
};
export const errorCallback = (store, { payload }) => {
  store.loading = false;
  store.error = payload;
};
