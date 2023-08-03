import { MainStackLayout } from "@/router/MainStackLayout";
import { store } from "@/store/store";
import { registerRootComponent } from "expo";
import React from "react";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <MainStackLayout />
    </Provider>
  );
};

registerRootComponent(App);
