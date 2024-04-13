'use client'
import { Button, Modal, useDisclosure } from "@nextui-org/react";
import { ModalNewProductForm } from "./ModalNewProductForm";

export const ModalNewProduct = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button color="primary" variant="shadow" onPress={onOpen}>Crear producto</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalNewProductForm/>
            </Modal>
        </>
    );
}
