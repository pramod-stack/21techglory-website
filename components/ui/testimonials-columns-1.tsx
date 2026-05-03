"use client";
import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "21TechGlory built our salon website and we started getting online bookings within 10 days of launch. Best investment we made.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Sharma",
    role: "Salon Owner, Bangalore"
  },
  {
    text: "Their Google My Business optimization doubled our walk-in patients in just 6 weeks. Absolutely worth every rupee.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Dr. Rajesh Kumar",
    role: "Clinic Owner, Bangalore"
  },
  {
    text: "The AI automation they set up means we never miss a customer inquiry — even at midnight. Game changer for our business.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Anita Reddy",
    role: "Restaurant Owner, Mysore"
  },
  {
    text: "Our real estate leads tripled after they ran our Meta ad campaigns. The ROI is incredible — 8x returns in 3 months.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Suresh Nair",
    role: "Real Estate Agent, Bangalore"
  },
  {
    text: "They redesigned our ecommerce site and our conversion rate went from 1.2% to 4.8%. Phenomenal work by the team.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Deepa Iyer",
    role: "Ecommerce Founder"
  },
  {
    text: "The CRM system they built for us made follow-ups automatic. Our sales team now closes 40% more deals with the same effort.",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Mohammed Rizwan",
    role: "Sales Director, Hyderabad"
  },
  {
    text: "We went from zero online presence to ranking #1 on Google for our main keyword in 4 months. Brilliant SEO work.",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    name: "Kavitha Menon",
    role: "Ayurveda Clinic, Kerala"
  },
  {
    text: "Their branding package completely transformed how customers perceive us. We now charge premium prices with confidence.",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Arjun Bhat",
    role: "Fitness Studio Owner"
  },
  {
    text: "21TechGlory understands local business. They didn't just build us a website — they gave us a complete digital system.",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    name: "Venkat Rao",
    role: "Agri Business Owner, Belgaum"
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 rounded-3xl border border-white/10 bg-gray-900/50 backdrop-blur-sm shadow-[0_0_15px_rgba(147,51,234,0.1)] max-w-xs w-full" key={i}>
                  <div className="text-gray-300 text-sm leading-relaxed">&quot;{text}&quot;</div>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      loading="lazy"
                      className="h-10 w-10 rounded-full object-cover border border-cyan-500/30"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-white tracking-tight leading-5 text-sm">{name}</div>
                      <div className="text-xs text-cyan-400 mt-0.5 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-white/10 bg-white/5 py-1.5 px-4 rounded-full text-sm text-gray-300 uppercase tracking-widest font-medium">
              Client Success
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Real results from real businesses across South India.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>
    </section>
  );
}
