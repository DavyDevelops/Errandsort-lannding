import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';

export function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
                <h1 className="mb-8 text-3xl font-bold text-gray-900">Privacy Policy</h1>
                <div className="prose prose-emerald max-w-none text-gray-600">
                    <p className="mb-4">Effective Date: February 19, 2026</p>
                    <p className="mb-6">
                        ErrandSort ("we," "our," or "us") is committed to protecting your
                        privacy. This Privacy Policy explains how we collect, use, disclose,
                        and safeguard your information when you visit our website
                        errandsort.com.
                    </p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">1. Introduction</h2>
                    <p className="mb-6">
                        Contact Information:
                    </p>
                    <ul className="mb-6 list-disc pl-6">
                        <li>Company: ErrandSort</li>
                        <li>Address: Ilorin</li>
                        <li>Email: info@errandsort.com</li>
                        <li>Phone: Not provided</li>
                    </ul>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">2. Information We Collect</h2>
                    <p className="mb-4">
                        We collect information you provide directly to us and information
                        we collect automatically when you use our services.
                    </p>
                    <p className="mb-4 font-semibold text-gray-900">Personal Information We Collect:</p>
                    <ul className="mb-6 list-disc pl-6">
                        <li>Name and contact information</li>
                        <li>Email addresses</li>
                        <li>Phone numbers</li>
                        <li>Payment information</li>
                        <li>Location data</li>
                    </ul>
                    <p className="mb-4 font-semibold text-gray-900">How We Collect Information:</p>
                    <ul className="mb-6 list-disc pl-6">
                        <li>Registration forms</li>
                        <li>Third-party integrations</li>
                    </ul>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">3. How We Use Your Information</h2>
                    <p className="mb-4">
                        We use the information we collect to:
                    </p>
                    <ul className="mb-6 list-disc pl-6">
                        <li>Provide services</li>
                        <li>Process payments</li>
                        <li>Customer support</li>
                        <li>Marketing communications</li>
                    </ul>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">4. Third-Party Services</h2>
                    <p className="mb-6">
                        We use the following third-party services that may collect information
                        about you:
                    </p>
                    <p className="mb-6">No third-party services currently configured.</p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">5. Cookies and Tracking Technologies</h2>
                    <p className="mb-6">
                        We use cookies and similar tracking technologies to collect and track
                        information and to improve our services.
                    </p>
                    <p className="mb-4 font-semibold text-gray-900">Types of Cookies We Use:</p>
                    <ul className="mb-6 list-disc pl-6">
                        <li>Essential cookies (required for basic functionality)</li>
                        <li>Analytics cookies (to understand how you use our site)</li>
                        <li>Marketing cookies (to show relevant advertisements)</li>
                    </ul>
                    <p className="mb-6">
                        You can control cookies through your browser settings.
                    </p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">6. Data Retention</h2>
                    <p className="mb-6">
                        We retain your personal information for 2 years or as long as necessary
                        to fulfill the purposes outlined in this Privacy Policy, unless a
                        longer retention period is required by law.
                    </p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">7. Data Security</h2>
                    <p className="mb-6">
                        We implement appropriate technical and organizational security measures
                        to protect your personal information against unauthorized access,
                        alteration, disclosure, or destruction.
                    </p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">8. Children's Privacy</h2>
                    <p className="mb-6">
                        Our services are not intended for children under 18. We do not knowingly
                        collect personal information from children under 18.
                    </p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">9. Changes to This Privacy Policy</h2>
                    <p className="mb-6">
                        We may update this Privacy Policy from time to time. We will notify you
                        of any changes by posting the new Privacy Policy on this page and
                        updating the "Effective Date."
                    </p>

                    <h2 className="mb-4 mt-8 text-xl font-bold text-gray-900">10. Contact Us</h2>
                    <p className="mb-4">
                        If you have questions about this Privacy Policy, please contact us:
                    </p>
                    <ul className="mb-6 list-disc pl-6">
                        <li>Email: info@errandsort.com</li>
                        <li>Phone: Not provided</li>
                        <li>Address: Ilorin</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}
