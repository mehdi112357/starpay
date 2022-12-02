import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
// import rootSaga from '../sagas/saga';
import { createLogger } from "redux-logger";
import storageSession from "redux-persist/lib/storage/session";


const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: [
    "authenticationReducer",
  ],
};

const logger = createLogger({
  collapsed: true,
  level: "warn",
});

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware, logger));
  }
  return applyMiddleware(...middleware);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const configureStore = createStore(
  persistedReducer,
  bindMiddleware([sagaMiddleware])
);

// sagaMiddleware.run(rootSaga);

// export default configureStore
export { configureStore };
