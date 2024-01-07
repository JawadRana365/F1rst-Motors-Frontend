import React from 'react'

export default function H5({
    children = "",
    className
}) {
  return (
    <>
        <h1 className={` ${className} mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}>
            {children}
        </h1>
    </>
  )
}
