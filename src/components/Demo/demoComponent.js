import React from "react";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Demo1 from "./demo1.js";
export default function DemoComponent() {
  return (
    <>
      <Provider store={store}>
        <Demo1 />
      </Provider>
    </>
  );
}
