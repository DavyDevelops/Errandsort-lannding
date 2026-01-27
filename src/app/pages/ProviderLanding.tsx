import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { Truck, ArrowRight, Wallet, MapPin } from 'lucide-react';

export function ProviderLanding() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="relative overflow-hidden bg-amber-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Earn More with <span className="text-amber-600">ErrandSort</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                            Set your own schedule, be your own boss, and earn money by delivering packages and providing services.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="https://errandsorthub.errandsort.com/provider/register/"
                                className="rounded-xl bg-amber-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                            >
                                Apply to be a Service Provider
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                                <Wallet className="h-8 w-8 text-amber-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">Competitive Earnings</h3>
                            <p className="mt-4 text-gray-600">Keep more of what you earn with our transparent fee structure and instant payouts.</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                                <MapPin className="h-8 w-8 text-amber-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">Flexible Schedule</h3>
                            <p className="mt-4 text-gray-600">Work when providing services or delivery whenever it fits your lifestyle.</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                                <Truck className="h-8 w-8 text-amber-600" />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">Steady Demand</h3>
                            <p className="mt-4 text-gray-600">Access a constant stream of delivery and service requests in your area.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
