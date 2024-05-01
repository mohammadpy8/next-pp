"use client";

import { pages } from "next/dist/build/templates/app-page";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import { GoHomeFill } from "react-icons/go";
import { RiSearch2Line, RiUserLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import Link from "next/link";

const BottomNavigation: FC = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white shadow-base w-[500px] h-18 fixed pb-4">
      <div className="flex mx-[2rem]  justify-between">
        <Link href="/">
          <div
            className={`flex flex-col gap-x-2 ${
              pathname === "/" ?  "border-t-4 border-t-primary-base" : "border-t-4 border-t-transparent"
            }`}
          >
            <div className="mt-2">
              <GoHomeFill color={pathname === "/" ? "#417F56" : "#717171"} size={35} />
            </div>
            <div className="flex justify-center items-center">
              <span
                className={`${
                  pathname === "/" ? "text-primary-base" : "text-secondary-base"
                } text-sm`}
              >
                خانه
              </span>
            </div>
          </div>
        </Link>
        <Link href="/search">
          <div
            className={`flex flex-col gap-x-2  ${
              pathname === "/search" ?  "border-t-4 border-t-primary-base" : "border-t-4 border-t-transparent"
            }`}
          >
            <div className="flex justify-center items-center mt-2">
              <RiSearch2Line color={pathname === "/search" ? "#417F56" : "#717171"} size={35} />
            </div>
            <div className="flex justify-center items-center">
              <span
                className={`${
                  pathname === "/search" ? "text-primary-base" : "text-secondary-base"
                } text-sm`}
              >
                جستجو
              </span>
            </div>
          </div>
        </Link>
        <Link href="/cart">
          <div
            className={`flex flex-col gap-x-2  ${
              pathname === "/cart" ?  "border-t-4 border-t-primary-base" : "border-t-4 border-t-transparent"
            }`}
          >
            <div className="flex justify-center items-center mt-2">
              <FiShoppingCart color={pathname === "/cart" ? "#417F56" : "#717171"} size={35} />
            </div>
            <div className="flex justify-center items-center">
              <span
                className={`${
                  pathname === "/cart" ? "text-primary-base" : "text-secondary-base"
                } text-sm`}
              >
                سبد خرید
              </span>
            </div>
          </div>
        </Link>
        <Link href="/order">
          <div
            className={`flex flex-col gap-x-2  ${
              pathname === "/order" ?  "border-t-4 border-t-primary-base" : "border-t-4 border-t-transparent"
            }`}
          >
            <div className="flex justify-center items-center mt-2">
              <HiOutlineClipboardDocumentList
                color={pathname === "/order" ? "#417F56" : "#717171"}
                size={35}
              />
            </div>
            <div className="flex justify-center items-center">
              <span
                className={`${
                  pathname === "/order" ? "text-primary-base" : "text-secondary-base"
                } text-sm`}
              >
                سفارشات
              </span>
            </div>
          </div>
        </Link>
        <Link href="/profile">
          <div
            className={`flex flex-col gap-x-2  ${
              pathname === "/profile" ?  "border-t-4 border-t-primary-base" : "border-t-4 border-t-transparent"
            }`}
          >
            <div className="flex justify-center items-center mt-2">
              <RiUserLine color={pathname === "/profile" ? "#417F56" : "#717171"} size={35} />
            </div>
            <div className="flex justify-center items-center">
              <span
                className={`${
                  pathname === "/profile" ? "text-primary-base" : "text-secondary-base"
                } text-sm`}
              >
                پروفایل
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export { BottomNavigation };
