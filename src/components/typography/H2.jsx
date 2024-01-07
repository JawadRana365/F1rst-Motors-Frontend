import React from 'react'

export default function H2({
    children = "",
    className
}) {
  return (
    <>
        <h1 className={` ${className} max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300`}>
            {children}
        </h1>
    </>
  )
}
