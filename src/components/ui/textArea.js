"use client";

import React, { forwardRef } from "react";

const Textarea = forwardRef(({ className = "", ...props }, ref) => {
    return (
        <>
            <textarea className={`textarea ${className}`} ref={ref} {...props} />
            <style jsx>{`
                .textarea {
                    width: 100%;
                    min-height: 80px;
                    padding: 0.5rem 0.75rem;
                    border: 1px solid #e5e7eb;
                    border-radius: 0.375rem;
                    font-size: 0.875rem;
                    background-color: white;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                    resize: vertical;
                    font-family: inherit;
                }
                
                .textarea:focus {
                    outline: none;
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
                }
                
                .textarea::placeholder {
                    color: #9ca3af;
                }
                
                .textarea:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
            `}</style>
        </>
    );
});

Textarea.displayName = "Textarea";

export default Textarea;
