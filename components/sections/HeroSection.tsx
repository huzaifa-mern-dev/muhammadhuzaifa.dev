'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-[92vh] flex items-center justify-center py-24 bg-transparent overflow-hidden"
      aria-label="About Muhammad Huzaifa"
    >
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-3deg); }
        }
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
      `}</style>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full max-w-7xl mx-auto">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-8 lg:pt-0">
            <AnimatedSection variant="fade-up" delay={0.1}>
              <div className="inline-flex items-center gap-2.5 text-xs font-mono mb-8 border rounded-full px-4 py-1.5 text-gray-700 border-gray-200 bg-white dark:text-gray-200 dark:border-white/10 dark:bg-white/5 shadow-sm">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-2 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-2"></span>
                </span>
                <span className="uppercase tracking-wide font-medium">Upwork Top Rated</span>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.2}>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold font-sans tracking-tight text-gray-900 dark:text-white mb-6 leading-tight min-h-[140px] md:min-h-[160px] lg:min-h-[180px]">
                Engineering Custom <br className="hidden lg:block" />
                <span className="text-primary-2 relative w-full inline-block mt-2">
                  <TypeAnimation
                    sequence={[
                      "Shopify Architectures", 2000,
                      "MERN Stack Solutions", 2000,
                      "WordPress Websites", 2000,
                      "WooCommerce Stores", 2000,
                      "Wix Developments", 2000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="inline-block"
                  />
                </span>
                <br className="hidden lg:block" />
                <span className="mt-2 inline-block">For Scaling Brands.</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.3}>
              <p className="text-base md:text-lg font-sans font-normal text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed mb-10">
                I am Muhammad Huzaifa, a Full-Stack Architect. I build high-performance e-commerce and custom web solutions using Shopify, WordPress, and the MERN stack. <strong className="text-gray-900 dark:text-white font-semibold">Stop renting bloated code. Start owning your tech infrastructure.</strong>
              </p>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
                <a
                  href="#contact"
                  className={[
                    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl w-full sm:w-auto",
                    "bg-primary-2",
                    "text-white dark:text-[#1e1e27]",
                    "font-sans font-bold text-sm lg:text-base tracking-wide",
                    "shadow-lg shadow-primary-2/30",
                    "hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-2/40",
                    "transition-all duration-300 active:scale-95",
                  ].join(" ")}
                >
                  <i className="ri-calendar-event-line text-lg" />
                  Book a Free Consultation
                </a>

                <a
                  href="#portfolio"
                  className={[
                    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl w-full sm:w-auto",
                    "border-2 border-gray-200 dark:border-white/10",
                    "text-gray-700 dark:text-[#8f8f92]",
                    "font-sans font-bold text-sm lg:text-base tracking-wide",
                    "hover:border-primary-2 hover:text-primary-2 dark:hover:border-primary-2 dark:hover:text-primary-2",
                    "hover:-translate-y-1 hover:bg-primary-2/5",
                    "transition-all duration-300 active:scale-95",
                  ].join(" ")}
                >
                  <i className="ri-briefcase-4-line text-lg" />
                  View Case Studies
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div className="flex items-center justify-center lg:justify-end w-full relative h-[450px] lg:h-[550px]">
            <AnimatedSection variant="zoom-in" delay={0.2} className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">
              
              <div 
                className="relative z-20 flex items-center justify-center w-72 h-72 lg:w-96 lg:h-96 overflow-hidden shadow-2xl border-[6px] border-white dark:border-white/10"
                style={{ animation: 'morph 8s ease-in-out infinite' }}
              >
                <div className="absolute inset-0 bg-primary-2/20 blur-xl z-0 pointer-events-none"></div>
                
                <Image
                  src="https://github.com/huzaifa-mern-dev.png" 
                  alt="Muhammad Huzaifa"
                  fill
                  sizes="(max-width: 1024px) 70vw, 50vw"
                  className="object-cover relative z-10 transition-transform duration-700 hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-2/10 to-transparent mix-blend-overlay pointer-events-none z-20" />
              </div>

              <div 
                className="absolute top-[2%] left-[12%] w-14 h-14 bg-white dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center justify-center z-30"
                style={{ animation: 'float-fast 4s ease-in-out infinite' }}
              >
                <i className="ri-reactjs-line text-3xl text-[#61DAFB]" />
              </div>

              <div 
                className="absolute bottom-[20%] left-[-2%] w-16 h-16 bg-white dark:bg-white/5 backdrop-blur-md rounded-full shadow-xl border border-gray-100 dark:border-white/10 flex items-center justify-center z-30"
                style={{ animation: 'float-slow 7s ease-in-out infinite' }}
              >
                <i className="ri-nodejs-line text-3xl text-[#339933]" />
              </div>

              <div 
                className="absolute top-[20%] right-[0%] w-14 h-14 bg-white dark:bg-white/5 backdrop-blur-md rounded-xl shadow-xl border border-gray-100 dark:border-white/10 flex items-center justify-center z-30"
                style={{ animation: 'float-medium 5s ease-in-out infinite' }}
              >
                <i className="ri-css3-line text-3xl text-[#38B2AC]" />
              </div>

              <div 
                className="absolute bottom-[5%] right-[15%] w-14 h-14 bg-white dark:bg-white/5 backdrop-blur-md rounded-full shadow-xl border border-gray-100 dark:border-white/10 flex items-center justify-center z-30"
                style={{ animation: 'float-fast 6s ease-in-out infinite' }}
              >
                <i className="ri-wordpress-fill text-3xl text-[#21759b]" />
              </div>

              <div 
                className="absolute top-[-5%] right-[30%] w-14 h-14 bg-white dark:bg-white/5 backdrop-blur-md rounded-full shadow-xl border border-gray-100 dark:border-white/10 flex items-center justify-center z-30"
                style={{ animation: 'float-medium 6.5s ease-in-out infinite' }}
              >
                <svg fill="currentColor" className="w-8 h-8 text-primary-2" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.99 7.842l-2.617-6.52c-.144-.356-.505-.59-.893-.564L4.996 1.83C4.248 1.895 3.73 2.627 3.93 3.355l1.642 5.922-3.415 1.579c-.43.199-.652.716-.487 1.159l4.52 11.979c.125.334.444.556.804.556h13.298c.367 0 .692-.232.813-.578l3.159-9.173A1.1 1.1 0 0 0 24 14.5c0-.62-.516-1.127-1.15-1.127h-1.077l1.205-5.32c.036-.16.03-.326-.018-.48a.5.5 0 0 0 .03-.131zM9.4 6.702c.063-.526.477-.923 1.002-.923h1.776c.465 0 .864.321.981.764l1.096 4.143L9.4 6.702zm-3.084.73 6.643 3.328-1.503 5.485c-.07.253-.357.518-.62.518H8.813c-.312 0-.612-.258-.696-.583l-1.801-8.748zm8.618 9.33-.878-3.32c-.066-.25.105-.486.363-.486h2.89L14.934 16.762zM21.11 12.3H19.5c-.328 0-.649.208-.755.518L15.939 21.5h-3.4l2.846-9.98c.112-.346.467-.611.834-.611H20.23L16.299 8.24l-3.33 1.129 1.1-4.088h2.09c1.076 0 1.98 1.002 2.148 2.378l.45 3.303 1.763.81a.571.571 0 0 1 .59.528z"/>
                </svg>
              </div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 dark:opacity-20 hidden sm:block" viewBox="0 0 450 450">
                <circle cx="225" cy="225" r="140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" className="text-gray-400 dark:text-gray-500 animate-[spin_60s_linear_infinite]" />
                <circle cx="225" cy="225" r="190" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" className="text-gray-300 dark:text-gray-600 animate-[spin_80s_linear_infinite_reverse]" />
              </svg>

            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
