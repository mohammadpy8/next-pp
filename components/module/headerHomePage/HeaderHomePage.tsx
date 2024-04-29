"use client";

import { LogoHeaderSvg } from "@/public/svg";
import type { FC } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

import { ModalComponent } from "@/components/custom";

const HeaderHomePage: FC = () => {
  const detailsModalButton = {
    titleButton: "شعبه",
    customStyles: "bg-primary-buttonColor text-white font-bold border-none outline-none",
    startIconButton: <CiLocationOn size={20} />,
    endIconButton: <IoIosArrowDown size={18} />,
  };

  const BoxShowModal = () => {
    return (
      <div className="flex flex-col mt-4">
        <div className="border-1 border-secondary-borderChild rounded-[10px]">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="w-fullS bg-primary-base h-[70px] flex px-[2rem] justify-between items-center">
        <div>
          <LogoHeaderSvg />
        </div>
        <div>
          <ModalComponent
            backdrop="blur"
            titleModal="انتخاب شعبه"
            openButtonModalDetails={detailsModalButton}
            headerStyle="bg-secondary-modalHeader text-black text-center justify-center items-center"
          >
            {BoxShowModal()}
          </ModalComponent>
        </div>
      </div>
    </div>
  );
};

export { HeaderHomePage };
