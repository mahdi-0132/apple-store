import { Button, Card, CardContent, CardFooter, CardHeader } from '@/components/ui'
import { GalleryThumbnails, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductItem = async (props : {Product:any}) => {
    const {Product} = props
  return (
    <Card className='w-[400px] transform transition-transform duration-300 hover:scale-105'>
        <CardHeader>
            <div className='relative w-full h-[300px]'>
                <Image
                 src={Product?.images[0]?.image || '/assets/noImage.jpg'}
                 alt={Product?.name}
                 fill
                 className='rounded-tl-lg object-cover'
                 />
            </div>
        </CardHeader>
        <CardContent>
            <h2 className='text-xl font-bold'> {Product?.name} </h2>
            <p className='text-gray-500'> {Product?.category} </p>
            <div className='flex justify-between items-center'>
                <p className='mt-4 text-lg font-semibold'>
                    ${Product?.price?.toFixed(3)}
                </p>
                <div className='flex gap-2'>
                    <Heart/>
                    <Link href={`/products/catalog?id=${Product.id}`}>
                    <GalleryThumbnails/>
                    </Link>
                </div>
            </div>
        </CardContent>
        <CardFooter>
            <Button className='w-full'>
                    <Link href={`/products/${Product.id}`}>More Detail</Link>
            </Button>
        </CardFooter>
    </Card>
  )
}

export default ProductItem