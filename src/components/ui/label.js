"use client"

import React, { forwardRef } from "react"

const Label = forwardRef(({ className = "", ...props }, ref) => {
    return (
        <>
            <label className={`label ${className}`} ref={ref} {...props} />
            <style jsx>{`
                    .label {
                        display: block;
                        font-size: 0.875rem;
                        font-weight: 500;
                        margin-bottom: 0.5rem;
                    }
                `}</style>
        </>
    )
})

Label.displayName = "Label"

export default Label
