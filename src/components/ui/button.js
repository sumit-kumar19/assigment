"use client";

import React from "react";

export default function Button({
    children,
    variant = "primary",
    size = "medium",
    type = "button",
    disabled = false,
    onClick,
    className = "",
}) {
    const getVariantClasses = () => {
        switch (variant) {
            case "primary":
                return "button-primary";
            case "outline":
                return "button-outline";
            case "text":
                return "button-text";
            default:
                return "button-primary";
        }
    };

    const getSizeClasses = () => {
        switch (size) {
            case "small":
                return "button-sm";
            case "large":
                return "button-lg";
            default:
                return "";
        }
    };

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`button ${getVariantClasses()} ${getSizeClasses()} ${className}`}
        >
            {children}

            <style jsx>{`
                .button {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 0.375rem;
                    font-weight: 500;
                    font-size: 0.875rem;
                    padding: 0 1rem;
                    height: 2.5rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    border: none;
                }
                
                .button-primary {
                    background-color: #3b82f6;
                    color: white;
                }
                
                .button-primary:hover:not(:disabled) {
                    background-color: #2563eb;
                }
                
                .button-outline {
                    background-color: transparent;
                    border: 1px solid #e5e7eb;
                    color: #111827;
                }
                
                .button-outline:hover:not(:disabled) {
                    background-color: #f9fafb;
                }
                
                .button-text {
                    background-color: transparent;
                    color: #3b82f6;
                    padding: 0;
                    height: auto;
                }
                
                .button-text:hover:not(:disabled) {
                    color: #2563eb;
                    text-decoration: underline;
                }
                
                .button-sm {
                    height: 2rem;
                    padding: 0 0.75rem;
                    font-size: 0.75rem;
                }
                
                .button-lg {
                    height: 3rem;
                    padding: 0 1.5rem;
                    font-size: 1rem;
                }
                
                .button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
            `}</style>
        </button>
    );
}
