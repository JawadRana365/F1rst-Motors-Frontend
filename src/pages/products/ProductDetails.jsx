import React, { useEffect, useState } from 'react'
import NavBarContainer from '../../components/navBar/NavBar'
import Carousel from '../../components/carousel/Carousel'
import { useParams } from 'react-router-dom';
import axiosClient from '../../utils/helpers/server';
import { toast } from 'react-toastify';
import Span from '../../components/span/Span';
import H2 from '../../components/typography/H2';
import Strong from '../../components/strong/Strong';
import Image from '../../components/image/Image';
import P from '../../components/typography/P';
import Button from '../../components/button/Button';

export default function ProductDetails() {
    let { id } = useParams();
    const [car,setCar] = useState()

    useEffect(()=> {
        axiosClient.get(`products/product-details/${id}`).then(resp => {
            if(resp.data.response === 200){
              setCar(resp.data.data.product)
            }else{
              toast.error("We are not able to process your request please try again", {
                position: toast.POSITION.TOP_CENTER,
            })
            }
          })
    },[])

    const handleMoreInfoClick = (e) => {
        document.getElementById("tabs-with-underline-2").classList.remove("hidden")
        document.getElementById("tabs-with-underline-1").classList.add("hidden")
    }

    const handleDescriptionClick = (e) => {
        document.getElementById("tabs-with-underline-2").classList.add("hidden")
        document.getElementById("tabs-with-underline-1").classList.remove("hidden")
    }

    return (
        <>
            <NavBarContainer/>
            <section className="py-10 font-poppins dark:bg-gray-800">
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="flex flex-wrap mb-24 -mx-4">

                        <div className="w-full md:w-1/2 md:mb-0">
                            <Carousel
                                images= {car && car.images}
                            />
                        </div>

                        <div className="w-full px-4 md:w-1/2">
                            <div className="lg:pl-20">
                                <div className="mb-6 ">
                                    <Span
                                        className="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-xl dark:text-gray-200"
                                        children={car && car.category.name}
                                    />
                                    <H2
                                        children={car && car.name}
                                    />
                                    <div className="flex flex-wrap flex-row mb-4">
                                        <Image 
                                            className="object-cover rounded-full w-8 h-8"
                                            src={ car && car.brand.image} 
                                            alt={ car && car.brand.name}
                                        />
                                        <Strong
                                            className="ml-2 text-gray-900 dark:text-white"
                                            children={ car && car.brand.name}
                                        />
                                    </div>
                                    <P
                                        className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400"
                                        children={
                                            <span>AED { car && car.price.toLocaleString()}</span>
                                        }
                                    />
                                </div>

                                <div className="mb-6">
                                    <H2
                                        className={"text-lg font-bold text-gray-700 dark:text-gray-400"}
                                        children="Car Specs :"
                                    />
                                    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                                        <div className="p-3 lg:p-5 ">
                                            <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                                                <div className="grid grid-cols-1 gap-4 p-6 mt-2 md:grid-cols-2 ">
                                                    <div>
                                                        <P
                                                            children="Year: " 
                                                            className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                                        />
                                                    </div>
                                                    <div>
                                                        <P
                                                            children={car && car.year}
                                                            className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                                        />
                                                    </div>
                                                    <div>
                                                        <P
                                                            children="Milage: " 
                                                            className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                                        />
                                                    </div>
                                                    <div>
                                                        <P
                                                            children={car && car.milage}
                                                            className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                                        />
                                                    </div>
                                                    <div>
                                                        <P
                                                            children="Exterior Color: " 
                                                            className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                                        />
                                                    </div>
                                                    <div>
                                                        <P
                                                            children={car && car.exteriorColor}
                                                            className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                                        />
                                                    </div>
                                                    <div>
                                                        <P
                                                            children="Interior Color: " 
                                                            className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                                        />
                                                    </div>
                                                    <div>
                                                        <P
                                                            children={car && car.interiorColor}
                                                            className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                                        />
                                                    </div>
                                                    <div>
                                                        <P
                                                            children="Drive Type: " 
                                                            className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                                        />
                                                    </div>
                                                    <div>
                                                        <P
                                                            children={car && car.driveType}
                                                            className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                                        />
                                                    </div>
                                                    <div>
                                                        <P
                                                            children="Engine: " 
                                                            className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                                        />
                                                    </div>
                                                    <div>
                                                        <P
                                                            children={car && car.engine}
                                                            className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                                        />
                                                    </div>
                                                    <div>
                                                        <P
                                                            children="Nody Type: " 
                                                            className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                                        />
                                                    </div>
                                                    <div>
                                                        <P
                                                            children={car && car.bodyType}
                                                            className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                                        />
                                                    </div>
                                                    <div>
                                                        <P
                                                            children="Transmission: " 
                                                            className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                                        />
                                                    </div>
                                                    <div>
                                                        <P
                                                            children={car && car.transmission}
                                                            className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6 "></div>

                                <div className="flex gap-4 mb-6">
                                    <Button
                                        children="Inquire Now"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
                            <button 
                                type="button" 
                                onClick={handleDescriptionClick}
                                className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active" id="tabs-with-underline-item-1" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                                Description
                            </button>
                            <button 
                                type="button" 
                                onClick={handleMoreInfoClick}
                                className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500" id="tabs-with-underline-item-2" data-hs-tab="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
                                More Information
                            </button>
                        </nav>
                        </div>

                        <div className="mt-3">
                        <div id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1">
                            <div className="text-gray-500 dark:text-gray-400">
                                { car && <div dangerouslySetInnerHTML={{__html:car.description}}/>}
                            </div>
                        </div>
                        <div id="tabs-with-underline-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
                            <div className="text-gray-500 dark:text-gray-400">
                                { car && <div dangerouslySetInnerHTML={{__html:car.detaildescription}}/>}
                            </div>
                        </div>
                    </div>

                </div>
                
                
            </section>
        </>
    )
}
