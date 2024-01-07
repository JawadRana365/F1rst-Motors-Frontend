import React from 'react'

export default function Span({
    className = "",
    children = ""
}) {
  return (
    <>
        <span className={`${className} text-gray-400 mr-3 uppercase text-xs`}>
            {children}
        </span>
    </>
  )
}
