import React from 'react'

export const ProductCard = () => {
    return (
        <div className='product__card'>
            {/* <div className='mb-4 rounded-xl overflow-hidden'> */}
                <img 
                    className='product__card--image'
                src="https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Producto" />
            {/* </div> */}
            
            <h3 className='mb-2 text-2xl text-center text-gray-700'>Nombre del producto</h3>
            <p className='text-center text-xl text-gray-500'>$65.2</p>

        </div>
    )
}
