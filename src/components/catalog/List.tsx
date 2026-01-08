'use client'
import { DATA } from '@/modules/products/mock/product'
import React from 'react'
import { Card, CardContent } from '../ui'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

function CatalogList() {
    const params = useSearchParams()
    const id = params.get('id')
    // console.log(id)
    const images = DATA[0].images
  return (
    <div>
    {images?.map((_images , index )=>{
        return(
            <div className='p-1 ' key={index}>
                <Card>
                    <CardContent>
                        <Image 
                        src={_images?.image}
                        alt='gallery'
                        width={400}
                        height={400}
                        className='hover:scale-105 transform transition-transform duration-300'
                        />
                    </CardContent>
                </Card>
            </div>
        )
    })}
    </div>
  )
}

export default CatalogList