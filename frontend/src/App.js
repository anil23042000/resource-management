import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./config/store";
import RouteConfig from "./config/route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastContainer autoClose={10000} />
          <RouteConfig />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
