"use client"

export function Card({ children, className = "" }) {
    return (
        <div className={`card ${className}`}>
            {children}

            <style jsx>{`
                .card {
                    background-color: white;
                    border-radius: 0.5rem;
                    border: 1px solid #e5e7eb;
                    overflow: hidden;
                    transition: box-shadow 0.2s ease, transform 0.2s ease;
                }
                
                .card:hover {
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                }
            `}</style>
        </div>
    )
}

export function CardHeader({ children, className = "" }) {
    return (
        <div className={`card-header ${className}`}>
            {children}

            <style jsx>{`
                .card-header {
                    padding: 1.5rem 1.5rem 0.5rem;
                }
            `}</style>
        </div>
    )
}

export function CardContent({ children, className = "" }) {
    return (
        <div className={`card-content ${className}`}>
            {children}

            <style jsx>{`
                .card-content {
                    padding: 1.5rem;
                }
            `}</style>
        </div>
    )
}

export function CardFooter({ children, className = "" }) {
    return (
        <div className={`card-footer ${className}`}>
            {children}

            <style jsx>{`
                .card-footer {
                    padding: 1.5rem;
                    border-top: 1px solid #e5e7eb;
                }
            `}</style>
        </div>
    )
}

export function CardTitle({ children, className = "" }) {
    return (
        <h3 className={`card-title ${className}`}>
            {children}

            <style jsx>{`
                .card-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                }
            `}</style>
        </h3>
    )
}

export function CardDescription({ children, className = "" }) {
    return (
        <p className={`card-description ${className}`}>
            {children}

            <style jsx>{`
                .card-description {
                    color: #6b7280;
                    font-size: 0.875rem;
                }
            `}</style>
        </p>
    )
}
