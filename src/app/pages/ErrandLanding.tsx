import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { ClipboardList, ShoppingCart, Fuel, FileText, ArrowRight } from 'lucide-react';

export function ErrandLanding() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="relative overflow-hidden bg-purple-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Get Your <span className="text-purple-600">Errands</span> Done
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                            From market runs to document collection, we handle the tasks you don't have time for.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="https://errandsorthub.errandsort.com/errand/register/"
                                className="rounded-xl bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                            >
                                Post an Errand
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                                <ShoppingCart className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">Market Runs</h3>
                            <p className="mt-4 text-gray-600">We'll do your grocery shopping and deliver fresh items to your door.</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                                <FileText className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">Documents</h3>
                            <p className="mt-4 text-gray-600">Secure collection and delivery of important documents and packages.</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                                <Fuel className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">Fuel Purchase</h3>
                            <p className="mt-4 text-gray-600">Run out of gas? We can deliver fuel to your location quickly.</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                                <ClipboardList className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">Personal Tasks</h3>
                            <p className="mt-4 text-gray-600">Any other task you need help with? Just let us know!</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
