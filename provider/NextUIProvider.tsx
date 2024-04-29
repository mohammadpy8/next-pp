import type { FC, ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

type childrenNextUIProviders = Readonly<{
  children: ReactNode;
}>;

const NextUIProviders: FC<childrenNextUIProviders> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export { NextUIProviders };
