"use client";
import { store } from "@/redux/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

interface ProviderReduxType {
  children: ReactNode;
}

const ProviderRedux: FC<ProviderReduxType> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderRedux;
