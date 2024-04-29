import { LogoHeaderSvg } from "@/public/svg";
import type { FC } from "react";

import { ButtonComponent } from "@/components/custom";

const HeaderHomePage: FC = () => {
  return (
    <div className="w-full">
      <div className="w-fullS bg-primary-base h-[70px]">
        <div>
          <LogoHeaderSvg />
        </div>
        <div><ButtonComponent textButton="ارسال"/></div>
      </div>
    </div>
  );
};

export { HeaderHomePage };
