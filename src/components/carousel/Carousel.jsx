import React, { useEffect, useState } from 'react'
import Image from '../image/Image'
import Button from '../button/Button'

export default function Carousel({
    images = []
}) {
    const [activeImage,setActiveImage] = useState()

    useEffect(() => {
        if(images.length > 0){
            setActiveImage(images[0])
        }
    },[images])

    const handleNextClick = (e) => {
        e.preventDefault();
        let currentIndex = images.findIndex(image => image == activeImage)
        currentIndex + 1 >= images.length ? setActiveImage(images[0]) : setActiveImage(images[currentIndex + 1])
    }

    const handlePreviousClick = (e) => {
        e.preventDefault();
        let currentIndex = images.findIndex(image => image == activeImage)
        currentIndex - 1 < 0 ? setActiveImage(images[images.length - 1]) : setActiveImage(images[currentIndex - 1])
    }

    return (
        <>
            <div className="sticky top-0 overflow-hidden ">
                <div className="relative my-6 lg:mb-10">
                    <button 
                        onClick={handlePreviousClick}
                        className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                            </path>
                        </svg>
                    </button>
                    <Image
                        classNameName="object-contain w-full lg:h-full"
                        src={activeImage && activeImage.image}
                    />
                    <button 
                        onClick={handleNextClick}
                        className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                            </path>
                        </svg>
                    </button>
                </div>
                <div className="flex-wrap hidden -mx-2 md:flex">
                    {images.map((image,key) => (
                        <div key={key} className="w-1/2 p-2 sm:w-1/4">
                            <button 
                                className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                                onClick={() => setActiveImage(image)}
                            >
                                <Image
                                    className="object-contain w-full lg:h-28"
                                    src={image.image}
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
