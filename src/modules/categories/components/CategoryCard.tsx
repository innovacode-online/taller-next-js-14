import React from 'react'
import { ICategory } from '../interfaces/category'

interface Props {
    category: ICategory
}


export const CategoryCard = ({ category }: Props) => {
    return (
        <div className='category__card'>
            <img className='category__card--image' src="https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Categoria" />

            <h3>{ category.name }</h3>
        </div>
    )
}
