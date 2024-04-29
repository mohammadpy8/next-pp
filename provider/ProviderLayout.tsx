import type { FC, ReactNode } from "react";
import { NextUIProviders } from "@/provider";

type childrenProviderLayout = Readonly<{
  children: ReactNode;
}>;

const ProviderLayout: FC<childrenProviderLayout> = ({ children }) => {
  return <NextUIProviders>{children}</NextUIProviders>;
};

export { ProviderLayout };
