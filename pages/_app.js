import "../styles/globals.css";
import { QueryClientProvider, Hydrate } from "react-query";
import queryClient from "../config/reactQueryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import 'react-toastify/dist/ReactToastify.css';
import { Provider,useStore } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import {store} from "../redux/store"
import { configureStore } from "../redux/store";
import { persistStore } from "redux-persist";


function MyApp({ Component, pageProps }) {
  const persistor = persistStore(configureStore);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={configureStore}>
          <PersistGate
            loading={<Component {...pageProps} />}
            persistor={persistor}
          >
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
