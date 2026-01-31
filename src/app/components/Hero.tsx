import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import heroImage from '@/assets/images/hero-delivery.jpg';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block rounded-full bg-emerald-100 px-4 py-2">
              <span className="text-sm font-medium text-emerald-900">
                🚀 Your Errands, Sorted
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Shop, Sell & Deliver with{' '}
              <span className="text-emerald-500">ErrandSort</span>
            </h1>

            <p className="text-lg text-gray-600 sm:text-xl">
              The all-in-one platform connecting customers, vendors, and service
              providers. Get anything delivered, grow your business, or earn on your schedule.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row items-center">
              <a
                href="https://errandsortpadi.errandsort.com/"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-8 py-4 font-bold text-white transition-transform hover:scale-105 hover:bg-emerald-600 shadow-lg shadow-emerald-200"
              >
                Get Started
              </a>
              <p className="text-sm font-medium text-gray-500 max-w-xs text-center sm:text-left">
                All our apps are available via <span className="text-emerald-600">Web App</span>, <span className="text-emerald-600">Google Play Store</span>, and <span className="text-emerald-600">App Store</span>.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Vendors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">5K+</div>
                <div className="text-sm text-gray-600">Service Providers</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl">
              <ImageWithFallback
                src={heroImage}
                alt="Happy customer receiving delivery in Nigeria"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Fast Delivery</div>
                  <div className="text-lg font-bold text-gray-900">Under 30 mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}