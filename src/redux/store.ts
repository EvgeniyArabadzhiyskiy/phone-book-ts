import { configureStore } from "@reduxjs/toolkit";
import contactSlise from "./contacts/contacts-slise";

// const middleware = (getDefaultMiddleware) => [
//   ...getDefaultMiddleware(),
// ];   
// Так нельзя const dispatch = useAppDispatch();
//  не ввидит типов . Нужно только так  
// middleware:(getDefaultMiddleware) => getDefaultMiddleware(),
// Последующие  middleware добавлять при помощи concat()

export const store = configureStore({
  reducer: {
    phomebook: contactSlise.reducer,
    // filter: contactSlise.reducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;








// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// import contactsReducers from "./contacts/contacts-reducers";

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducers,
//   },
//   middleware: [...getDefaultMiddleware()],
//   devTools: process.env.NODE_ENV === "development",
// });

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import contactsReducers from './contacts/contacts-reducers';

// const contactPersistConfig = {
//   key: 'contact',
//   storage,
//   blacklist: ['filter'],
// };

// export const store = configureStore({
//   reducer: {
//     contacts: persistReducer(contactPersistConfig, contactsReducers),
//   },

//   middleware: [
//     ...getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//     logger,
//   ],
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);
