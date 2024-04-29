"use client";

import { LogoHeaderSvg } from "@/public/svg";
import type { FC } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

import { ButtonComponent, ModalComponent } from "@/components/custom";
import { useDisclosure } from "@nextui-org/react";

const HeaderHomePage: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const detailsModalButton = {
    titleButton: "شعبه",
    customStyles: "bg-primary-buttonColor text-white font-bold border-none outline-none",
    startIconButton: <CiLocationOn size={20} />,
    endIconButton: <IoIosArrowDown size={18} />,
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
            titleModal="mmm"
            openButtonModalDetails={detailsModalButton}
          >
            <p>mmmm</p>
          </ModalComponent>
        </div>
      </div>
    </div>
  );
};

export { HeaderHomePage };
