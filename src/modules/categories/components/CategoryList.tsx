import React from 'react'
import { CategoryCard } from '..'
import { ModalNewCategory } from './modal-new-category/ModalNewCategory'

export const CategoryList = () => {
    return (
        <section>
            <div className="container">
                <div className='flex items-center justify-between mb-6'>
                    <h2>Lista de <span className='font-light'>Categorias</span></h2>
                    <ModalNewCategory />
                </div>

                <ul className='category__list'>
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(category => (
                            <li key={category}>
                                <CategoryCard />
                            </li>
                        ))
                    }
                </ul>

            </div>

        </section>
    )
}
