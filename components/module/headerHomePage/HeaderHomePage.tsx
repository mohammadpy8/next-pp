import { LogoHeaderSvg } from "@/public/svg";
import type { FC } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

import { ButtonComponent } from "@/components/custom";

const HeaderHomePage: FC = () => {
  return (
    <div className="w-full">
      <div className="w-fullS bg-primary-base h-[70px] flex px-[2rem] justify-between items-center">
        <div>
          <LogoHeaderSvg />
        </div>
        <div>
          <ButtonComponent
            textButton="شعبه"
            customStyles="bg-primary-buttonColor text-white font-bold border-none outline-none"
            startIconButton={<CiLocationOn size={20} />}
            endIconButton={<IoIosArrowDown size={18} />}
          />
        </div>
      </div>
    </div>
  );
};

export { HeaderHomePage };
