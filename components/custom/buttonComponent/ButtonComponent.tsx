import { Button } from "@nextui-org/react";
import type { FC } from "react";

type PropsButtonComponent = {
  startIconButton?: JSX.Element;
  textButton: string;
};

const ButtonComponent: FC<PropsButtonComponent> = ({ startIconButton, textButton }) => {
  return <Button color="danger">{textButton}</Button>;
};

export { ButtonComponent };
