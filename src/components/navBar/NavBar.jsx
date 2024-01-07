import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import AnchorTag from '../anchorTag/AnchorTag';
import Image from '../image/Image';

export default function NavBarContainer() {


    const navigate = useNavigate()

    const handleAddProductClick = (e) => {
        navigate("/add-product")
    }

    return (
        <>
            <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <AnchorTag
                        href='/'
                        children= {
                            <Image
                                className="w-64 h-16 mr-2"
                                src="https://strapiadmin.f1rstmotors.com/uploads/firstmotor_logo_1b423799e1.png?w=828&q=75"
                                alt="logo"
                            />
                        }
                    />
                    <div className="flex md:order-2 space-x-3 md:space-x-0">
                        <Button
                            onButtonClick={handleAddProductClick}
                            classNameName="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            children="Add New Car"
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}
