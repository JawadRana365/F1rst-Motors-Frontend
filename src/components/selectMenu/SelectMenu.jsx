import React from 'react'

export default function SelectMenu({
    options = [],
    className = '',
    label = "",
    labelClassName = "",
    onSelectMenuChange = () => {}
}) {
  return (
    <>
        <div>
            <label
              className={`${labelClassName} block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>
                {label}
            </label>
            <select
                onChange={onSelectMenuChange}
                className={` ${className} bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            >
                {options.map((option,index) => (
                    <option key={index} value={option.value}>{option.name}</option>
                ))}
            </select>
        </div>
    </>
  )
}
