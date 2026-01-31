import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { ShoppingBag, ArrowRight, Clock, Shield } from 'lucide-react';

export function CustomerLanding() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="relative overflow-hidden bg-blue-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Shop Smarter with <span className="text-blue-600">ErrandSort</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                            Access local stores, hire service professionals, and get everything delivered to your doorstep.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="https://errandsortpadi.errandsort.com/signup"
                                className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Sign Up Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                <ShoppingBag className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">One-Stop Shop</h3>
                            <p className="mt-4 text-gray-600">Find everything from groceries to home services in one single app.</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                <Clock className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">Fast Delivery</h3>
                            <p className="mt-4 text-gray-600">Get your orders delivered in under 30 minutes with real-time tracking.</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                                <Shield className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">Buyer Protection</h3>
                            <p className="mt-4 text-gray-600">Shop with confidence knowing your payments and orders are protected.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
