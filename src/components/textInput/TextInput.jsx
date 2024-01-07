import React from 'react'

export default function TextInput({
    label = "",
    labelClassName = "",
    className = "",
    placeHolder = "",
    inputType= "text",
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
              type={inputType}
              className={` ${className} bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder={placeHolder}/>
        </div>
    </>
  )
}
