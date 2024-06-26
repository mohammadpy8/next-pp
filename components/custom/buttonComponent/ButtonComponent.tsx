"use client";

import { Button } from "@nextui-org/react";
import type { FC } from "react";

type PropsButtonComponent = {
  startIconButton?: JSX.Element;
  endIconButton?: JSX.Element;
  textButton: string;
  clickHander?: (value: any) => void;
  customStyles?: string;
  sizeButton?: "sm" | "md" | "lg";
};

const ButtonComponent: FC<PropsButtonComponent> = ({
  startIconButton,
  endIconButton,
  textButton,
  clickHander,
  customStyles,
  sizeButton,
}) => {
  return (
    <Button
      onClick={clickHander}
      className={customStyles}
      size={sizeButton ?? "sm"}
      startContent={startIconButton}
      endContent={endIconButton}
    >
      {textButton}
    </Button>
  );
};

export { ButtonComponent };
