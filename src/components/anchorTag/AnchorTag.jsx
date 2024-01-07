import React from 'react'

export default function AnchorTag({
    href = "",
    className = "",
    children = ""
}) {
  return (
    <>
        <a 
            href={href} 
            className={ `${className} text-sm font-medium text-gray-500 hover:underline dark:text-primary-500`}
        >
            {children}
        </a>
    </>
  )
}
