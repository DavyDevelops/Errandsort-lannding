import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import appMockup from '@/assets/images/app-showcase-mockup.png';

export function AppShowcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-emerald-400 to-green-400 py-16 sm:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* App Image */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              <ImageWithFallback
                src={appMockup}
                alt="ErrandSort mobile app interface"
                className="relative z-10 w-full drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Download the app today
              </h2>
              <p className="text-lg text-emerald-50 sm:text-xl">
                Available on iOS and Android. Start shopping, selling, or delivering in minutes.
              </p>
            </div>

            {/* App Link Info */}
            <p className="text-xl font-medium text-white italic">
              All our apps are available via Web App, Google Play Store, and App Store.
            </p>

            {/* Rating */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:justify-start">
              <div className="flex items-center justify-center gap-1 lg:justify-start">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl text-white">★</span>
                ))}
              </div>
              <div className="text-emerald-50">
                <div className="font-semibold">4.8 out of 5</div>
                <div className="text-sm">Based on 12,000+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}