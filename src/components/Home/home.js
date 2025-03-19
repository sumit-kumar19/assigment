import Button from '../ui/button';
import imges from '../../assests/images.png';

export default function Hero() {
    return (
        <section className="hero relative h-screen flex items-center justify-center">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={imges}
                    alt="Hero background"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-3xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Welcome to Our Platform
                </h1>
                <p className="text-lg md:text-xl mb-8 leading-relaxed">
                    We provide innovative solutions to help your business grow and succeed in today's competitive market.
                </p>
                <div className="flex justify-center gap-4">
                    <Button variant="primary" size="large" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                        Get Started
                    </Button>
                    <Button variant="outline" size="large" className="border-2 border-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-black">
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    );
}

