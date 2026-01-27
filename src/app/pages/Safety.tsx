import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';

export function Safety() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
                <h1 className="mb-8 text-3xl font-bold text-gray-900">Safety at ErrandSort</h1>
                <div className="prose prose-emerald max-w-none text-gray-600">
                    <p className="mb-6 text-lg">
                        Your safety is our top priority. We implement strict measures to ensure a secure experience for all users.
                    </p>

                    <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">For Customers</h2>
                    <ul className="mb-6 list-disc pl-6">
                        <li>Verified Service Providers and Vendors</li>
                        <li>Secure, cashless transactions</li>
                        <li>Real-time order and service tracking</li>
                        <li>24/7 Customer Support</li>
                    </ul>

                    <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">For Providers & Vendors</h2>
                    <ul className="mb-6 list-disc pl-6">
                        <li>Identity verification for all users</li>
                        <li>Secure payment processing</li>
                        <li>Community guidelines and rating system</li>
                        <li>Support for dispute resolution</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}
