"use client";
import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Best service with affordable price",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "sabkhus work",
    date: "3 hours ago",
    reviewsCount: 1,
  },
  {
    text: "I recently hired 21Techglory to build my website, and I couldn't be happier with the results. From the very first consultation, they were professional, attentive, and really took the time to understand my brand's vision.The design is … More",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Lepaksha Nj",
    date: "a day ago",
    reviewsCount: 9,
  },
  {
    text: "Very satisfied with the website features. Especially the payment gateway and automation tools—they saved me a lot of time and helped me get more clients",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    name: "Ashutosh Rastogi",
    date: "a day ago",
    reviewsCount: 32,
  },
  {
    text: "After launching my website, I saw a big difference. Customers can easily book and pay online, which increased my conversions. The automation system saves my time and helps me focus on growing my business.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Pushpalatha M",
    date: "a day ago",
    reviewsCount: 2,
  },
  {
    text: "I started getting leads within days of launching the website. The system works perfectly and gives a professional image to my business.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "naveen navi",
    date: "a day ago",
    reviewsCount: 6,
  },
  {
    text: "Reasonable pricing, understanding the demand, quick service and and good customer support 👍 really satisfied with the service. …",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Anirban Sen",
    date: "a day ago",
    reviewsCount: 1,
  },
  {
    text: "Let me be honest this company is one of best reliable price they quoted and coming to performance I have started getting customers after website and automation, I was not aware of automation being doctor I am happy that my patients are more … More",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    name: "Deepak Biradar",
    date: "2 days ago",
    reviewsCount: 6,
  },
  {
    text: "We had a best website for best price and now after 20 days I can see leads thank you techglory",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Hrudhay Vardhan N",
    date: "2 days ago",
    reviewsCount: 3,
  },
  {
    text: "Excellent service by 21 techglory fast delivery great communication. and quality work. high recommended...",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    name: "Uppi M.c",
    date: "4 days ago",
    reviewsCount: 2,
  },
  {
    text: "Best web designer in Bangalore completed development in a week got great results , thank you . I will refer other business !",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    name: "Ashwin Gowda03ag",
    date: "4 days ago",
    reviewsCount: 10,
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
              {props.testimonials.map(({ text, image, name, date, reviewsCount }, i) => (
                <div className="p-6 rounded-2xl border border-white/10 bg-[#202124] shadow-lg max-w-xs w-full flex flex-col text-left" key={i}>
                  {/* Header: User Info & Google Icon */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-3 items-center">
                      <div className="relative">
                        <img
                          width={40}
                          height={40}
                          src={image}
                          alt={name}
                          loading="lazy"
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-white text-[15px]">{name}</span>
                        {reviewsCount && (
                          <div className="flex items-center text-xs text-gray-400 mt-0.5">
                            <span>{reviewsCount} reviews</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Google G icon */}
                    <div className="w-5 h-5 flex-shrink-0 opacity-90">
                      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4"/>
                        <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853"/>
                        <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03296C-0.371021 20.0112 -0.371021 28.0009 3.03296 34.7825L11.0051 28.6006Z" fill="#FBBC04"/>
                        <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6869 13.0973L40.5387 6.24553C36.2021 2.18688 30.4266 -0.068932 24.48 0.00161733C15.4056 0.00161733 7.10718 5.11644 3.03296 13.2296L11.0051 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335"/>
                      </svg>
                    </div>
                  </div>

                  {/* Stars & Date */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-3.5 h-3.5 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs">{date}</span>
                  </div>

                  {/* Review Text */}
                  <div className="text-[#E8EAED] text-[14px] leading-[1.6] whitespace-pre-line font-normal">
                    {text}
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
  const [showReviews, setShowReviews] = React.useState(true);

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 7);
  const thirdColumn = testimonials.slice(7, 10);

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
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <div className="border border-white/10 bg-white/5 py-1.5 px-4 rounded-full text-sm text-gray-300 uppercase tracking-widest font-medium">
              Client Success
            </div>
            
            <a 
              href="https://g.page/r/your-google-review-link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/10 bg-white/5 py-1.5 px-4 rounded-full text-sm text-gray-300 font-medium cursor-pointer hover:bg-white/10 transition-colors group"
            >
              <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4"/>
                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853"/>
                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03296C-0.371021 20.0112 -0.371021 28.0009 3.03296 34.7825L11.0051 28.6006Z" fill="#FBBC04"/>
                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6869 13.0973L40.5387 6.24553C36.2021 2.18688 30.4266 -0.068932 24.48 0.00161733C15.4056 0.00161733 7.10718 5.11644 3.03296 13.2296L11.0051 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335"/>
              </svg>
              <span className="font-semibold text-white">4.9</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-3.5 h-3.5 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-400 text-xs ml-1 group-hover:text-white transition-colors">Excellent</span>
            </a>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-400 text-lg mb-6">
            Real results from real businesses across South India.
          </p>

          <button
            onClick={() => setShowReviews(!showReviews)}
            className="px-6 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium transition-all"
          >
            {showReviews ? "Hide Reviews" : "Show Reviews"}
          </button>
        </motion.div>

        {showReviews && (
          <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] h-[600px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={25} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
          </div>
        )}
      </div>
    </section>
  );
}
