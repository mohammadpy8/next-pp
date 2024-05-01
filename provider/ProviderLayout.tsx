import type { FC, ReactNode } from "react";
import { NextUIProviders, StyledComponentProvider } from "@/provider";

type childrenProviderLayout = Readonly<{
  children: ReactNode;
}>;

const ProviderLayout: FC<childrenProviderLayout> = ({ children }) => {
  return (
    <StyledComponentProvider>
      <NextUIProviders>{children}</NextUIProviders>
    </StyledComponentProvider>
  );
};

export { ProviderLayout };
