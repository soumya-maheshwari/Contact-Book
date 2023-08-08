import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import authReducer from "./authSlice";
import contactReducer from "./contactSlice";

// Redux Persist configuration
const persistConfig = {
  key: "root", // The key for the root of the state object
  storage: storage, // The storage engine (localStorage in this case)
  // Add any other configuration options if needed
};

// Create persisted reducers
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedContactReducer = persistReducer(persistConfig, contactReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contact: persistedContactReducer,
  },
  middleware: [thunk],
});

// Create the persisted store
const persistor = persistStore(store);

export { persistor, store };
