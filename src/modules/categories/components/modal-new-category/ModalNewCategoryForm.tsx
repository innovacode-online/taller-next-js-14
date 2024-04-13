import { FormEvent, useState } from 'react'

import { toast } from 'sonner'

import { Button, Input, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'


interface Props {
    onClose: () => void;
}

export const ModalNewCategoryForm = ({ onClose }: Props) => {

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const { categoryName } = e.target as HTMLFormElement; 

        if( categoryName.value.trim() === '' ){
            setIsLoading(false);
            toast.warning('Debe agregar un nombre')
            return;
        }

        setIsLoading(false);
        onClose();

    }

    return (
        <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1">Registra una categoria</ModalHeader>
                    <ModalBody>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <Input
                                label="Nombre del producto"
                                fullWidth
                                name="categoryName"
                            />



                            <input type="file" name='image' />

                            <div className='mb-4 flex justify-end gap-4 mt-4 items-center'>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button isLoading={isLoading} isDisabled={isLoading} color="primary" type='submit' >
                                    Guardar
                                </Button>
                            </div>

                        </form>
                    </ModalBody>
                </>
            )}

        </ModalContent>
    )
}
