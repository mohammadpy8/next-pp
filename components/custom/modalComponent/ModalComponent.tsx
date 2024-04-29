"use client";

import type { FC } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import { ButtonComponent } from "@/components/custom";

type PropsModalComponent = {
  children: React.ReactNode;
  titleModal: string;
  headerStyle?: string;
  bodyStyle?: string;
  backdrop: "opaque" | "blur" | "transparent";
  closeTop?: boolean;
  modalFooterComponent?: JSX.Element;
  footerStyle?: string;
  openButtonModalDetails: {
    titleButton: string;
    customStyles: string;
    startIconButton: JSX.Element;
    endIconButton: JSX.Element;
  };
};

const ModalComponent: FC<PropsModalComponent> = ({
  backdrop,
  children,
  headerStyle,
  titleModal,
  bodyStyle,
  footerStyle,
  modalFooterComponent,
  openButtonModalDetails: { customStyles, endIconButton, startIconButton, titleButton },
  closeTop,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <ButtonComponent
        textButton={titleButton}
        clickHander={() => onOpen()}
        customStyles={customStyles}
        startIconButton={startIconButton}
        endIconButton={endIconButton}
      />
      <Modal isOpen={isOpen} onClose={onClose} backdrop={backdrop}>
        <ModalContent>
          {(onClose: () => void) => (
            <>
              <ModalHeader className={headerStyle}>{titleModal}</ModalHeader>
              <ModalBody className={bodyStyle}>{children}</ModalBody>
              <ModalFooter className={footerStyle}>{modalFooterComponent}</ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export { ModalComponent };
