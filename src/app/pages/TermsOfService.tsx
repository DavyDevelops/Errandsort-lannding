import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';

export function TermsOfService() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
                <h1 className="mb-8 text-3xl font-bold text-gray-900">Terms of Service</h1>
                <div className="prose prose-emerald max-w-none text-gray-600">
                    <p className="mb-4">Last updated: January 27, 2026</p>
                    <p className="mb-6">
                        Please read these Terms of Service carefully before using the ErrandSort platform.
                    </p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                    <p className="mb-6">
                        By accessing or using ErrandSort, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
                    </p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">2. Description of Service</h2>
                    <p className="mb-6">
                        ErrandSort provides a platform connecting customers with vendors and service providers. We act as an intermediary and are not a party to the transactions between users.
                    </p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">3. User Accounts</h2>
                    <p className="mb-6">
                        You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
                    </p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">4. User Conduct</h2>
                    <p className="mb-6">
                        You agree not to use the service for any unlawful purpose or in any way that interrupts, damages, or impairs the service.
                    </p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">5. Termination</h2>
                    <p className="mb-6">
                        We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
