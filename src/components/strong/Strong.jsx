import React from 'react'

export default function Strong({
    className = "",
    children = ""
}) {
  return (
    <>
        <strong className={className}>
            {children}
        </strong>
    </>
  )
}
