import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React, { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import store from "./redux/redux-store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <StrictMode>
          <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
      </StrictMode>
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(()=>{
    rerenderEntireTree(store.getState());
});

serviceWorker.unregister();
