import React, { useEffect, useState } from 'react'
import TextInput from '../../textInput/TextInput'
import H1 from '../../typography/H1'
import axiosClient from '../../../utils/helpers/server'
import SelectMenu from '../../selectMenu/SelectMenu'
import {
  EditorComposer,
  Editor,
  ToolbarPlugin,
  AlignDropdown,
  BackgroundColorPicker,
  BoldButton,
  CodeFormatButton,
  FontFamilyDropdown,
  FontSizeDropdown,
  InsertDropdown,
  InsertLinkButton,
  ItalicButton,
  TextColorPicker,
  TextFormatDropdown,
  UnderlineButton,
  Divider,
} from 'verbum';
import ImageInput from '../../imageInput/ImageInput'
import Button from '../../button/Button'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function CreateProductForm() {
    const navigate = useNavigate()

    const [brands,setBrands] = useState([])
    const [categories,setCategories] = useState([])
    const [yearsData,setYearsData] = useState([])
    const [brand,setBrand] = useState([])
    const [category,setCategory] = useState([])
    const [name,setName] = useState()
    const [year,setYear] = useState()
    const [milage,setMilage] = useState()
    const [exteriorColor,setExteriorColor] = useState()
    const [interiorColor,setInteriorColor] = useState()
    const [driveType,setDriveType] = useState()
    const [engine,setEngine] = useState()
    const [bodyType,setBodyType] = useState()
    const [transmission,setTransmission] = useState()
    const [description,setDescription] = useState()
    const [detailDescription,setDetailDescription] = useState()
    const [price,setPrice] = useState()
    const [images,setImages] = useState([])

    useEffect(()=>{
        axiosClient.get(`products/product-preload`).then(resp => {
        if(resp.data.response === 200){
            setBrands(resp.data.data.brands)
            setBrand(resp.data.data.brands[0].id)
            setCategories(resp.data.data.categories)
            setCategory(resp.data.data.categories[0].id)
        }
        })
        setYearsData([])
        const currentYear = new Date().getFullYear(),
            startyear = currentYear-20;
        setYear(currentYear)
        for (let index = startyear; index <= currentYear; index++) {
        setYearsData(yearsData => [...yearsData, {
            value: index,
            name: index
        }])
        }

    },[])

    const handleBrandChange = (e) => { setBrand(e.currentTarget.value)}
    const handleCategoryChange = (e) => { setCategory(e.currentTarget.value)}
    const handleNameChange = (e) => { setName(e.currentTarget.value)}
    const handleYearChange = (e) => { setYear(e.currentTarget.value)}
    const handleMilageChange = (e) => { setMilage(e.currentTarget.value)}
    const handleExteriroColorChange = (e) => { setExteriorColor(e.currentTarget.value)}
    const handleInteriorColorChange = (e) => { setInteriorColor(e.currentTarget.value)}
    const handleDriveTypeChange = (e) => { setDriveType(e.currentTarget.value)}
    const handleEngineChange = (e) => { setEngine(e.currentTarget.value)}
    const handleBodyTypeChange = (e) => { setBodyType(e.currentTarget.value)}
    const handleTransmissionChange = (e) => { setTransmission(e.currentTarget.value)}
    const handlePriceChange = (e) => { setPrice(e.currentTarget.value)}
    const handleImagesChange = (e) => { setImages(e.target.files)}

    const handleCreateCar= (e) => {
        if(!brand || brand === "" || brand === null || brand === undefined){
            toast.error("Please Select Brand For The Car", {
                position: toast.POSITION.TOP_CENTER,
            })
            return;
        }
        if(!category || category === "" || category === null || category === undefined){
            toast.error("Please Select Category for the Car", {
                position: toast.POSITION.TOP_CENTER,
            })
            return;
        }
        if(!name || name === "" || name === null || name === undefined){
            toast.error("Please Enter Name for the Car", {
                position: toast.POSITION.TOP_CENTER,
            })
            return;
        }
        if(!year || year === "" || year === null || year === undefined){
            toast.error("Please Select Registration Year for the Car", {
                position: toast.POSITION.TOP_CENTER,
            })
            return;
        }
        if(!milage || milage === "" || milage === null || milage === undefined){
            toast.error("Please Enter Milage for the Car", {
                position: toast.POSITION.TOP_CENTER,
            })
            return;
        }
        if(!exteriorColor || exteriorColor === "" || exteriorColor === null || exteriorColor === undefined){
            toast.error("Please Enter Exterior Color for the Car", {
                position: toast.POSITION.TOP_CENTER,
            })
            return;
        }
        if(!interiorColor || interiorColor === "" || interiorColor === null || interiorColor === undefined){
            toast.error("Please Enter Interior Color for the Car", {
                position: toast.POSITION.TOP_CENTER,
            })
            return;
        }
        if(!driveType || driveType === "" || driveType === null || driveType === undefined){
            toast.error("Please Enter Drive Type for the Car", {
                position: toast.POSITION.TOP_CENTER,
            })
            return;
        }
        if(!engine || engine === "" || engine === null || engine === undefined){
            toast.error("Please Enter Engine Details for the Car", {
                position: toast.POSITION.TOP_CENTER,
            })
            return;
        }
        if(!bodyType || bodyType === "" || bodyType === null || bodyType === undefined){
            toast.error("Please Enter Body Type for the Car", {
                position: toast.POSITION.TOP_CENTER,
            })
            return;
        }
        if(!transmission || transmission === "" || transmission === null || transmission === undefined){
            toast.error("Please Enter Transmission for the Car", {
                position: toast.POSITION.TOP_CENTER,
            })
            return;
        }
        if(!price || price === "" || price === null || price === undefined){
            toast.error("Please Enter Price for the Car", {
                position: toast.POSITION.TOP_CENTER,
            })
            return;
        }
        if(!images || images === "" || images === null || images === undefined || images.length < 1){
            toast.error("Please Enter Category for the Car", {
                position: toast.POSITION.TOP_CENTER,
            })
            return;
        }
        
        let bodyFormData = new FormData()
        bodyFormData.append("name", name)
        bodyFormData.append("year", year)
        bodyFormData.append("milage", milage)
        bodyFormData.append("price", price)
        for (let i = 0; i < images.length; i++) {
            bodyFormData.append('images', images[i]);
        }
        bodyFormData.append("category_id", category)
        bodyFormData.append("brand_id", brand)
        bodyFormData.append("exteriorColor", exteriorColor)
        bodyFormData.append("interiorColor", interiorColor)
        bodyFormData.append("driveType", driveType)
        bodyFormData.append("engine", engine)
        bodyFormData.append("bodyType", bodyType)
        bodyFormData.append("transmission", transmission)
        bodyFormData.append("description", description)
        bodyFormData.append("detaildescription", detailDescription)
        axiosClient.post(`products/create-product`,bodyFormData).then(resp => {
            if(resp.data.response === 200){
                navigate("/")
            }else{
                toast.error("We are not able to process your request please try again", {
                    position: toast.POSITION.TOP_CENTER,
                })
            }
        })
    }

    const handleClearForm= (e) => {
        window.location.reload(false);
    }

    return (
        <>
            <section className="bg-white-50 dark:bg-slate-300 p-8">
                <div className="w-[calc(100%_-_25%)] mx-auto bg-primary-700 rounded-lg shadow dark:border dark:bg-gray-900 dark:border-gray-700">
                    <div className="flex items-center justify-center my-4">
                        <H1
                        children="REGISTER CAR"
                        className=""
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 p-6 mt-2 md:grid-cols-2 ">
                        <div>
                        <SelectMenu
                            label="Select Brand"
                            options={brands.map((brand) => {
                            return {
                                value: brand.id,
                                name: brand.name
                            }
                            })}
                            onSelectMenuChange={handleBrandChange}
                        />
                        </div>
                        <div>
                        <SelectMenu
                            label="Select Category"
                            options={categories.map((category) => {
                            return {
                                value: category.id,
                                name: category.name
                            }
                            })}
                            onSelectMenuChange={handleCategoryChange}
                        />
                        </div>
                        <div>
                        <TextInput
                            label = "Car Name"
                            placeHolder = "Enter the Name of Car"
                            onInputChange={handleNameChange}
                        />
                        </div>
                        <div>
                        <SelectMenu
                            label="Select Registration Year"
                            options={yearsData}
                            onSelectMenuChange={handleYearChange}
                        />
                        </div>
                        <div>
                        <TextInput
                            inputType= "number"
                            label = "Milage"
                            placeHolder = "Enter the Milage for the Car"
                            onInputChange={handleMilageChange}
                        />
                        </div>
                        <div>
                        <TextInput
                            label = "Exterior Color"
                            placeHolder = "Enter the Exterior Color for the Car"
                            onInputChange={handleExteriroColorChange}
                        />
                        </div>
                        <div>
                        <TextInput
                            label = "Interior Color"
                            placeHolder = "Enter the Interior Color for the Car"
                            onInputChange={handleInteriorColorChange}
                        />
                        </div>
                        <div>
                        <TextInput
                            label = "Drive Type"
                            placeHolder = "Enter the Drive Type for the Car"
                            onInputChange={handleDriveTypeChange}
                        />
                        </div>
                        <div>
                        <TextInput
                            label = "Engine Type"
                            placeHolder = "Enter the Engine Type for the Car"
                            onInputChange={handleEngineChange}
                        />
                        </div>
                        <div>
                        <TextInput
                            label = "Body Type"
                            placeHolder = "Enter the Body Type for the Car"
                            onInputChange={handleBodyTypeChange}
                        />
                        </div>
                        <div>
                        <TextInput
                            label = "Transmission"
                            placeHolder = "Enter the Transmission for the Car"
                            onInputChange={handleTransmissionChange}
                        />
                        </div>
                        <div>
                            <TextInput
                                inputType= "number"
                                label = "Price"
                                placeHolder = "Enter the Price for the Car"
                                onInputChange={handlePriceChange}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 px-6 ">
                        <div>
                            <label
                                className={`block text-sm font-medium text-gray-900 dark:text-white`}>
                                Description
                            </label>
                            <EditorComposer>
                                <Editor 
                                hashtagsEnables={true} 
                                emojisEnabled={true} 
                                onChange={(editorState, editorInstance) => {
                                    const editorContent = document.querySelector('.ContentEditable__root').innerHTML
                                    setDescription(editorContent)
                                }}
                                >
                                <ToolbarPlugin defaultFontSize="20px">
                                    <FontFamilyDropdown />
                                    <FontSizeDropdown />
                                    <Divider />
                                    <BoldButton />
                                    <ItalicButton />
                                    <UnderlineButton />
                                    <CodeFormatButton />
                                    <InsertLinkButton />
                                    <TextColorPicker />
                                    <BackgroundColorPicker />
                                    <TextFormatDropdown />
                                    <Divider />
                                    <InsertDropdown enablePoll={true} />
                                    <Divider />
                                    <AlignDropdown />
                                </ToolbarPlugin>
                                </Editor>
                            </EditorComposer>
                        </div>
                        
                        <div>
                            <label
                                className={`block text-sm font-medium text-gray-900 dark:text-white`}>
                                More Information
                            </label>
                            <EditorComposer>
                                <Editor id="more-info" hashtagsEnables={true} emojisEnabled={true} 
                                onChange={(editorState, editorInstance) => {
                                    const editorContent = document.querySelectorAll('.ContentEditable__root')[1].innerHTML
                                    setDetailDescription(editorContent)
                                }}>
                                <ToolbarPlugin defaultFontSize="20px">
                                    <FontFamilyDropdown />
                                    <FontSizeDropdown />
                                    <Divider />
                                    <BoldButton />
                                    <ItalicButton />
                                    <UnderlineButton />
                                    <CodeFormatButton />
                                    <InsertLinkButton />
                                    <TextColorPicker />
                                    <BackgroundColorPicker />
                                    <TextFormatDropdown />
                                    <Divider />
                                    <InsertDropdown enablePoll={true} />
                                    <Divider />
                                    <AlignDropdown />
                                </ToolbarPlugin>
                                </Editor>
                            </EditorComposer>
                        </div>


                        <div>
                        <ImageInput
                            label = "Upload Multiple Image"
                            placeHolder = "Upload images for your car"
                            onInputChange={handleImagesChange}
                        />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 p-6 mt-2 md:grid-cols-2 ">
                        <div>
                            <Button
                            children="Create Car"
                            onButtonClick={handleCreateCar}
                            />
                        </div>
                        <div>
                            <Button
                            children="Clear Form"
                            onButtonClick={handleClearForm}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
