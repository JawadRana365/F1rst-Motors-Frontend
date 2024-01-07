import React from 'react'

export default function ImageInput({
    label = "",
    labelClassName = "",
    className = "",
    placeHolder = "",
    onInputChange = () => {}
}) {
  return (
    <>
        <div>
            <label
              className={`${labelClassName} block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>
                {label}
            </label>
            <input 
              onChange={onInputChange} 
              type={"file"}
              multiple="multiple"
              accept="image/png, image/jpeg, image/jpg, image/svg"
              className={` ${className} block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400`}
              placeholder={placeHolder}/>
        </div>
    </>
  )
}
