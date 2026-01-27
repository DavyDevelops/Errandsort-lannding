import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';

export function HelpCenter() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
                <h1 className="mb-8 text-3xl font-bold text-gray-900">Help Center</h1>
                <div className="prose prose-emerald max-w-none text-gray-600">
                    <p className="mb-8 text-lg">
                        Find answers to common questions and learn how to get the most out of ErrandSort.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">How do I sign up?</h3>
                            <p className="mt-2">
                                Click the "Get Started" button in the top right corner and choose your role (Customer, Vendor, Service Provider, or Errand Runner). Follow the prompts to create your account.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900">How do payments work?</h3>
                            <p className="mt-2">
                                We use secure payment processing for all transactions. Customers pay through the app, and vendors/providers receive payouts directly to their linked accounts.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Is my information safe?</h3>
                            <p className="mt-2">
                                Yes, we take security seriously. All personal and payment information is encrypted and protected according to industry standards.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Contact Support</h3>
                            <p className="mt-2">
                                Need more help? Email us at support@errandsort.com.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
