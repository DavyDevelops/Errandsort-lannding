import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';

export function AboutUs() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
                <h1 className="mb-8 text-3xl font-bold text-gray-900">About ErrandSort</h1>
                <div className="prose prose-emerald max-w-none text-gray-600">
                    <p className="mb-6 text-lg">
                        ErrandSort is the all-in-one platform connecting customers, vendors, and service providers. Our mission is to simplify daily tasks and empower local businesses to grow.
                    </p>

                    <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Our Mission</h2>
                    <p className="mb-6">
                        To provide a seamless ecosystem where anyone can shop, sell, or offer services, making life easier and more productive for everyone involved.
                    </p>

                    <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">What We Do</h2>
                    <p className="mb-6">
                        We bring together a marketplace for products, a hub for professional services, and a reliable network for errands and deliveries. Whether you need a plumber, groceries, or a package delivered, ErrandSort has you sorted.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
