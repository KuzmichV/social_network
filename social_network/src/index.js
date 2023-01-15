import * as serviceWorker from "./serviceWorker";
import {store} from "./redux/state";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React, { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <StrictMode>
        <App
          state={state}
          addPost={store.addPost.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
        />
      </StrictMode>
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());

serviceWorker.unregister();

store.subscribe(rerenderEntireTree);
