import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Olumide Adebayo',
      role: 'Customer',
      content: 'ErrandSort has completely changed how I shop in Lagos. Fast delivery, great prices, and they always get my orders right!',
      rating: 5,
      avatar: '👨🏾',
    },
    {
      name: 'Chika Nwosu',
      role: 'Vendor',
      content: 'My sales have tripled since joining ErrandSort. The vendor dashboard is so easy to use, even for someone like me who isn\'t tech-savvy.',
      rating: 5,
      avatar: '👩🏾',
    },
    {
      name: 'Fatimah Bello',
      role: 'Service Provider',
      content: 'I love the freedom this platform gives me. I can provide my cleaning services on my own schedule and the payments are always on time.',
      rating: 5,
      avatar: '👩🏾',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by our community
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our users have to say about ErrandSort
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 text-gray-700">{testimonial.content}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-emerald-100">
                  {typeof testimonial.avatar === 'string' && (testimonial.avatar.startsWith('/') || testimonial.avatar.startsWith('http')) ? (
                    <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}