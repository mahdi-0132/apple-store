import React from 'react'
import { DATA } from '../mock/product'
import ProductItem from './ProductItem'
function ProductList() {
  return (
    <div className='flex flex-wrap justify-between items-center w-full my-10'>
            {DATA.map(item=>{
                return(
                    <ProductItem key={item.name} Product={item}/>
                )
            })}
    </div>
  )
}

export default ProductList