"use client";

import { LogoHeaderSvg } from "@/public/svg";
import type { FC } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdMyLocation } from "react-icons/md";

import { ButtonComponent, ModalComponent } from "@/components/custom";
import Image from "next/image";

const HeaderHomePage: FC = () => {
  const detailsModalButton = {
    titleButton: "شعبه",
    customStyles: "bg-primary-buttonColor text-white font-bold border-none outline-none",
    startIconButton: <CiLocationOn size={20} />,
    endIconButton: <IoIosArrowDown size={18} />,
  };

  const BoxShowModal = () => {
    return (
      <div className="flex flex-col mt-4 space-y-4">
        <div className="border-1 border-secondary-borderChild rounded-[10px] flex justify-between">
          <div>
            <Image
              src="/image/1.png"
              width={150}
              height={50}
              alt="1"
              className="w-[150px] h-[100px] rounded-r-[10px]"
            />
          </div>
          <div className="flex flex-col mx-14 w-36">
            <div className="mt-[9px] mr-6">
              <span className="font-bold">شعبه اکباتان</span>
            </div>
            <div>
              <span className="text-[10px] text-center">
                شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
              </span>
            </div>
          </div>
        </div>
        <div className="border-1 border-secondary-borderChild rounded-[10px] flex justify-between">
          <div>
            <Image
              src="/image/2.WEBP"
              width={150}
              height={50}
              alt="1"
              className="w-[150px] h-[100px] rounded-r-[10px]"
            />
          </div>
          <div className="flex flex-col mx-14 w-36">
            <div className="mt-[9px] mr-6">
              <span className="font-bold">شعبه اکباتان</span>
            </div>
            <div>
              <span className="text-[10px] text-center">
                شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
              </span>
            </div>
          </div>
        </div>
        <div className="border-1 border-secondary-borderChild rounded-[10px] flex justify-between">
          <div>
            <Image
              src="/image/3.WEBP"
              width={150}
              height={50}
              alt="1"
              className="w-[150px] h-[100px] rounded-r-[10px]"
            />
          </div>
          <div className="flex flex-col mx-14 w-36">
            <div className="mt-[9px] mr-6">
              <span className="font-bold">شعبه اکباتان</span>
            </div>
            <div>
              <span className="text-[10px] text-center">
                شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم
              </span>
            </div>
          </div>
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
            modalFooterComponent={
              <div>
                <ButtonComponent
                  textButton="انتخاب نزدیک‌ترین شعبه"
                  customStyles="text-white bg-primary-base"
                  startIconButton={<MdMyLocation />}
                />
              </div>
            }
            footerStyle="flex justify-center"
          >
            {BoxShowModal()}
          </ModalComponent>
        </div>
      </div>
    </div>
  );
};

export { HeaderHomePage };
