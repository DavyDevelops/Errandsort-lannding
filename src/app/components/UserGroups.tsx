import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Apple, Smartphone, Globe, Star, Truck, ShoppingBag, Store } from 'lucide-react';
import customerImage from '@/assets/images/customer-lifestyle.jpg';
import vendorImage from '@/assets/images/vendor-kitchen.jpg';
import courierImage from '@/assets/images/courier-rider.jpg';

export function UserGroups() {
  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join our community
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're shopping, selling, or delivering - ErrandSort connects you to the best opportunities in Nigeria.
          </p>
        </div>

        <div className="space-y-32">
          {/* Customers Section */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-blue-600">
                  <ShoppingBag className="h-4 w-4" />
                  Shop smarter
                </div>
                <h3 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                  For Customers
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Browse thousands of products, track deliveries in real-time, and enjoy exclusive deals from local vendors. Everything you need, delivered to your doorstep.
              </p>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  <a href="https://errandsortpadi.errandsort.com/" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white transition-all hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-200">
                    <Globe className="h-5 w-5" />
                    <span className="font-bold">Access Web App</span>
                  </a>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="#" aria-disabled="true" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-white opacity-70 cursor-not-allowed shadow-md">
                    <Smartphone className="h-5 w-5" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase leading-none opacity-70">Get it on</div>
                      <div className="text-xs font-bold leading-none">Google Play (Coming Soon)</div>
                    </div>
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-white transition-all hover:bg-gray-800 hover:scale-105 shadow-md">
                    <Apple className="h-5 w-5" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase leading-none opacity-70">Download on</div>
                      <div className="text-xs font-bold leading-none">App Store</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-gray-50 max-w-xs">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="text-sm font-semibold text-gray-700">"Trusted by 50,000+ Nigerians"</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-[3rem] bg-blue-50/50 p-4 border-2 border-blue-100 rotate-3 transition-transform hover:rotate-0">
                <ImageWithFallback
                  src={customerImage}
                  alt="Customer shopping"
                  className="h-full w-full object-cover rounded-[2.5rem] shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Vendors & Service Providers Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">Grow Your Online Presence</h3>
              <p className="text-gray-600 max-w-2xl mx-auto italic">One powerful hub for businesses and professionals in Nigeria.</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Vendors Card */}
              <div className="group flex flex-col space-y-8 rounded-[2.5rem] bg-gradient-to-br from-emerald-50 to-white p-10 shadow-sm border border-emerald-100/50 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mb-2 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Store className="h-7 w-7" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900">For Vendors</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Reach more customers, manage inventory effortlessly, and boost sales with our powerful vendor dashboard. Perfect for local shops and online sellers.
                  </p>
                </div>

                <div className="space-y-6 pt-4 border-t border-emerald-100/30">
                  <a href="https://errandsorthub.errandsort.com/" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all underline decoration-2 underline-offset-4">
                    Access Vendor Portal <span className="text-xl">→</span>
                  </a>

                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 transition-colors shadow-md">
                      <Smartphone className="h-4 w-4" />
                      <span className="text-xs font-bold">Google Play</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                  <span className="ml-2 text-xs font-bold text-emerald-700 bg-emerald-100/50 px-2 py-1 rounded-full uppercase tracking-wider">Top Rated Platform</span>
                </div>
              </div>

              {/* Service Providers Card */}
              <div className="group flex flex-col space-y-8 rounded-[2.5rem] bg-gradient-to-br from-emerald-50 to-white p-10 shadow-sm border border-emerald-100/50 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mb-2 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Truck className="h-7 w-7" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900">For Service Providers</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Offer professional services like plumbing, electrical work, or cleaning. Set your own schedule and maximize your earnings with flexible opportunities.
                  </p>
                </div>

                <div className="space-y-6 pt-4 border-t border-emerald-100/30">
                  <a href="https://errandsorthub.errandsort.com/" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all underline decoration-2 underline-offset-4">
                    Access Provider Hub <span className="text-xl">→</span>
                  </a>

                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 transition-colors shadow-md">
                      <Smartphone className="h-4 w-4" />
                      <span className="text-xs font-bold">Google Play</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                  <span className="ml-2 text-xs font-bold text-emerald-700 bg-emerald-100/50 px-2 py-1 rounded-full uppercase tracking-wider">Elite Professionals</span>
                </div>
              </div>
            </div>
          </div>

          {/* Riders Section */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="lg:order-2 space-y-8">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-emerald-600">
                  <Truck className="h-4 w-4" />
                  Earn on the go
                </div>
                <h3 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                  For Riders
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join our fleet of professional riders and earn money by delivering orders across your city. You are the backbone of our delivery network. Fast payouts and flexible hours.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-3 rounded-xl bg-gray-900 px-6 py-3.5 text-white transition-all hover:bg-gray-800 hover:scale-105 shadow-xl">
                  <Smartphone className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase leading-none opacity-70">Get it on</div>
                    <div className="text-sm font-bold leading-none mt-1">Google Play</div>
                  </div>
                </a>
                <a href="#" className="inline-flex items-center gap-3 rounded-xl bg-gray-900 px-6 py-3.5 text-white transition-all hover:bg-gray-800 hover:scale-105 shadow-xl">
                  <Apple className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase leading-none opacity-70">Download on</div>
                    <div className="text-sm font-bold leading-none mt-1">App Store</div>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="text-sm font-bold text-gray-800 italic">"Highly rated delivery network in Nigeria"</span>
              </div>
            </div>

            <div className="lg:order-1 relative">
              <div className="relative aspect-square overflow-hidden rounded-[3rem] bg-emerald-50/50 p-4 border-2 border-emerald-100 -rotate-3 transition-transform hover:rotate-0">
                <ImageWithFallback
                  src={courierImage}
                  alt="Rider delivering"
                  className="h-full w-full object-cover rounded-[2.5rem] shadow-2xl"
                />

                {/* Floating Stats */}
                <div className="absolute top-8 -right-4 rounded-2xl bg-white p-4 shadow-xl border border-gray-100 animate-bounce-subtle">
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Weekly Earnings</div>
                  <div className="text-lg font-bold text-emerald-600">Up to ₦50k+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}