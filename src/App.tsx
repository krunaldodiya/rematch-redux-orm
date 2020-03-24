import { getPersistor } from "@rematch/persist";
import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store";

const Home = lazy(() => import("./Home"));

function App() {
  const persistor = getPersistor();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={null}>
          <Home />
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
