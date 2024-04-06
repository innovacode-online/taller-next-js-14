import React from 'react'
import { CategoryCard } from '..'

export const CategoryList = () => {
    return (
        <section>
            <div className="container">
                <h2 className='mb-4'>Lista de <span className='font-light'>Categorias</span></h2>

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
