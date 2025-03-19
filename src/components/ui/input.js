"use client";

import React, { forwardRef } from "react";

const Input = forwardRef(({ className = "", ...props }, ref) => {
    return (
        <>
            <input className={`input ${className}`} ref={ref} {...props} />
            <style jsx>{`
                .input {
                    width: 100%;
                    height: 2.5rem;
                    padding: 0 0.75rem;
                    border: 1px solid #e5e7eb;
                    border-radius: 0.375rem;
                    font-size: 0.875rem;
                    background-color: white;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                }
                
                .input:focus {
                    outline: none;
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
                }
                
                .input::placeholder {
                    color: #9ca3af;
                }
                
                .input:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
            `}</style>
        </>
    );
});

Input.displayName = "Input";

export default Input;
