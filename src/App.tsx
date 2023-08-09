import { registerRootComponent } from "expo";
import React from "react";
import { Provider } from "react-redux";

import { MainStackLayout } from "@/router/MainStackLayout";
import { store } from "@/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <MainStackLayout />
    </Provider>
  );
};

registerRootComponent(App);
