'use client'
import { FormEvent } from 'react';

import { ModalContent, ModalHeader, ModalBody, Button, Select, Input, SelectItem } from '@nextui-org/react';


export const ModalNewProductForm = () => {

    const categories = [
        {
            id: 1,
            name: 'Categoria 1',
        },
        {
            id: 2,
            name: 'Categoria 2',
        },
        {
            id: 3,
            name: 'Categoria 3',
        },
        {
            id: 4,
            name: 'Categoria 4',
        },
        {
            id: 5,
            name: 'Categoria 5',
        },
    ];


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // OBTENER LOS DATOS DEL FORMULARIO
        const { productName, price, categoryId } = e.target as HTMLFormElement;
        const product = {
            name: productName.value,
            price: price.value,
            categoryId: categoryId.value,
        }

        if( Object.values( product ).includes('') ){
            console.log('Error')
            return;
        }

        
        // VALIDACION DE LOS DATOS

        // TODO?: create product action

        // LIMPIAR DATOS Y CERRAR MODAL
    }

    return (
        <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1">Registra un nuevo producto</ModalHeader>
                    <ModalBody>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <Input
                                label="Nombre del producto"
                                fullWidth
                                name="productName"
                            />

                            <Input
                                label="Precio del producto"
                                fullWidth
                                type="number"
                                name="price"
                                min={0}
                                step='0.01'
                            />

                            <Select
                                label="Selecciona la categoria"
                                placeholder="Selector de categoria"
                                name='categoryId'
                            >
                                {categories.map((category) => (
                                    <SelectItem key={ category.id } value={ category.id }>
                                        { category.name }
                                    </SelectItem>
                                ))}
                            </Select>
                                
                            <input type="file" name='image'/>

                            <div className='mb-4 flex justify-end gap-4 mt-4 items-center'>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button color="primary" type='submit' >
                                    Guardar
                                </Button>
                            </div>

                        </form>
                    </ModalBody>
                </>
            )}
        </ModalContent>
    );
}
