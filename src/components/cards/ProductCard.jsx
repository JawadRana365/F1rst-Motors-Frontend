import React from 'react'
import Image from '../image/Image'
import H5 from '../typography/H5'
import P from '../typography/P'
import Span from '../span/Span'
import Strong from '../strong/Strong'
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({
    car
}) {
    const navigate = useNavigate()

    const handleDetailBtnClick = (e) => {
        navigate(`/product/details/${car.id}`)
    }

    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Image 
                    className="rounded-t-lg"
                    src={ car.images[0].image} 
                    alt={ car.name}
                />
                <div className="p-5">
                    <Span
                        children={car.category.name}
                    />
                    <H5
                        children={car.name}
                    />
                    <div class="flex flex-wrap flex-row mr-8">
                        <Image 
                            className="object-cover rounded-full w-8 h-8"
                            src={ car.brand.image} 
                            alt={ car.brand.name}
                        />
                        <Strong
                            className="ml-2 text-gray-900 dark:text-white"
                            children={car.brand.name}
                        />
                    </div>
                    <div
                        className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3"
                        dangerouslySetInnerHTML={{__html:car.description}}
                    />
                    <Button
                        onButtonClick={handleDetailBtnClick}
                        children="View Details"
                    />
                </div>
            </div>
        </>
    )
}
