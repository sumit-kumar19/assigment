import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "../ui/card"
import Button from "../ui/button"

const pricingPlans = [
    {
        name: "Essential",
        price: "$9",
        description: "A reliable starter plan, perfect for small teams ready to take the first step.",
        features: [
            "Up to 5 Projects",
            "Basic Analytics",
            "Round-the-clock Online Support",
            "1 Team Member"
        ],
        popular: false,
    },
    {
        name: "Professional",
        price: "$29",
        description: "For growing businesses that need enhanced features and deeper insights.",
        features: [
            "Up to 20 Projects",
            "Advanced Analytics",
            "Priority 24/7 Support",
            "Up to 5 Team Members",
            "Custom Reporting"
        ],
        popular: false,
    },
    {
        name: "Enterprise",
        price: "$99",
        description: "Designed for large organizations requiring a powerful, scalable solution.",
        features: [
            "Unlimited Projects",
            "Comprehensive Analytics",
            "Dedicated Support",
            "Unlimited Team Members",
            "Custom Reporting",
            "API Access"
        ],
        popular: false,
    },
]

export default function Pricing() {
    const [selected, setSelected] = useState(null)

    return (
        <section id="pricing" className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Pricing Plans</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Choose the perfect plan for your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            onClick={() => setSelected(index)}
                            className="cursor-pointer"
                        >
                            <Card
                                className={`flex flex-col h-full border rounded-lg p-6 shadow-sm relative transform transition-transform duration-200 
                                    ${plan.popular ? "border-blue-500 shadow-lg" : "border-gray-200"}
                                    ${selected === index ? "scale-105 border-blue-600 shadow-2xl" : ""}
                                `}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                                        <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                            Popular
                                        </span>
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                                    <div className="flex items-baseline mt-2 mb-2">
                                        <span className="text-3xl font-bold">{plan.price}</span>
                                        <span className="text-gray-500 ml-1">/month</span>
                                    </div>
                                    <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="list-none pl-0 mt-4 space-y-2">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-center">
                                                <span className="text-blue-500 mr-2 font-bold">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="mt-auto">
                                    <Button variant={plan.popular ? "primary" : "outline"} className="w-full">
                                        Get Started
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
