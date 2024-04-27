import React from 'react'
import { CategoryCard, ICategory } from '..'
import { ModalNewCategory } from './modal-new-category/ModalNewCategory'

interface Props {
    categories: ICategory[]
}

export const CategoryList = ({ categories }: Props) => {
    return (
        <section>
            <div className="container">
                <div className='flex items-center justify-between mb-6'>
                    <h2>Lista de <span className='font-light'>Categorias</span></h2>
                    <ModalNewCategory />
                </div>

                <ul className='category__list'>
                    {
                        categories.map(category => (
                            <li key={category.id}>
                                <CategoryCard 
                                    category={ category }
                                />
                            </li>
                        ))
                    }
                </ul>

            </div>

        </section>
    )
}
