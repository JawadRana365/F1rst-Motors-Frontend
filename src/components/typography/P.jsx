import React from 'react'

export default function P({
    children = "",
    className = ""
}) {
  return (
    <>
        <p className={`${className} text-sm font-light text-gray-500 dark:text-gray-400`}>
            {children}
        </p>
    </>
  )
}
