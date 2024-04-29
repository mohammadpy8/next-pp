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

type PropsModalComponent = {
  children: React.ReactNode;
  titleModal: string;
  headerStyle?: string;
  bodyStyle?: string;
  backdrop: "opaque" | "blur" | "transparent";
  closeTop?: boolean;
};

const ModalComponent: FC<PropsModalComponent> = ({
  backdrop,
  children,
  headerStyle,
  titleModal,
  bodyStyle,
  closeTop,
}) => {
  const { isOpen, onClose } = useDisclosure();

  return (
    <Modal isOpen={isOpen} onClose={onClose} backdrop={backdrop}>
      <ModalContent>
        {(onClose: () => void) => (
          <>
            <ModalHeader className={headerStyle}>{titleModal}</ModalHeader>
            <ModalBody className={bodyStyle}>{children}</ModalBody>
            <ModalFooter>
              <Button onPress={onClose} color="primary">+</Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export { ModalComponent };
