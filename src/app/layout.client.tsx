"use client";

import LayoutPage from "@/components/layout/LayoutPage";
import ProviderRedux from "@/provider/Provider";
import { FC, ReactNode } from "react";

interface LayoutClientType {
  children: ReactNode;
}
const LayoutClient: FC<LayoutClientType> = ({ children }) => {
  return (
    <LayoutPage>
      <ProviderRedux>{children}</ProviderRedux>
    </LayoutPage>
  );
};

export default LayoutClient;
