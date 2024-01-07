import React from 'react'

export default function H1({
    children = "",
    className
}) {
  return (
    <>
        <h1 className={` ${className} text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white`}>
            {children}
        </h1>
    </>
  )
}
