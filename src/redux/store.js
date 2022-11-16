import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filter/slice';
import authReducer from './auth/auth-slice';
import contactsReducer from './contacts/slice';
// import contactsApi from './contacts/api';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(contactsApi.middleware),
});

export default store;
