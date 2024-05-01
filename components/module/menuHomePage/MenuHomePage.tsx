import type { FC } from "react";
import Image from "next/image";
import { ButtonComponent } from "@/components/custom";

const MenuHomePage: FC = () => {
  return (
    <div className="mt-6">
      <div className="bg-primary-bgColor w-48 h-14 rounded-l-2xl flex justify-center items-center">
        <span className="font-bold text-[20px]">منوی رستوران</span>
      </div>
      <div className="mt-4 mx-5 flex justify-between gap-x-40 overflow-x-scroll h-[250px] menu-box">
        {/* <div className="bg-red-500 w-[150px]">
          <div className="flex justify-center -pt-12">
            <Image
              src="/image/1.png"
              width={150}
              height={150}
              alt="1"
              className="w-[120px] h-[120px] rounded-full"
            />
          </div>
          <div className="flex justify-center">
            <div className="bg-primary-base w-[140px] h-[85px] rounded-lg shadow-xl"></div>
          </div>
          <div></div>
        </div> */}
        <div className="relative">
          <div>
            <Image
              src="/image/11.jpg"
              alt="1"
              width={120}
              height={100}
              className="w-[120px] h-[120px] rounded-full mr-[10px] z-10 absolute"
            />
          </div>
          <div className="bg-primary-base w-[140px] h-[85px] rounded-lg shadow-xl absolute top-[75px] z-0">
            <ButtonComponent
              textButton="غذای اصلی"
              customStyles="bg-white shadow-xl font-bold text-[15px] absolute -bottom-2 right-[25px] text-gray-600"
            />
          </div>
        </div>
        <div className=" relative">
          <div>
            <Image
              src="/image/11.jpg"
              alt="1"
              width={120}
              height={100}
              className="w-[120px] h-[120px] rounded-full mr-[10px] z-10 absolute"
            />
          </div>
          <div className="bg-primary-base w-[140px] h-[85px] rounded-lg shadow-xl absolute top-[75px] z-0">
            <ButtonComponent
              textButton="غذای اصلی"
              customStyles="bg-white shadow-xl font-bold text-[15px] absolute -bottom-2 right-[25px] text-gray-600"
            />
          </div>
        </div>
        <div className=" relative">
          <div>
            <Image
              src="/image/11.jpg"
              alt="1"
              width={120}
              height={100}
              className="w-[120px] h-[120px] rounded-full mr-[10px] z-10 absolute"
            />
          </div>
          <div className="bg-primary-base w-[140px] h-[85px] rounded-lg shadow-xl absolute top-[75px] z-0">
            <ButtonComponent
              textButton="غذای اصلی"
              customStyles="bg-white shadow-xl font-bold text-[15px] absolute -bottom-2 right-[25px] text-gray-600"
            />
          </div>
        </div>
        <div className=" relative">
          <div>
            <Image
              src="/image/11.jpg"
              alt="1"
              width={120}
              height={100}
              className="w-[120px] h-[120px] rounded-full mr-[10px] z-10 absolute"
            />
          </div>
          <div className="bg-primary-base w-[140px] h-[85px] rounded-lg shadow-xl absolute top-[75px] z-0">
            <ButtonComponent
              textButton="غذای اصلی"
              customStyles="bg-white shadow-xl font-bold text-[15px] absolute -bottom-2 right-[25px] text-gray-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MenuHomePage };
