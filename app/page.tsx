import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff0f3] text-[#5e2d36] font-sans selection:bg-[#ffcdd2] overflow-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 start-0 border-b border-[#ffdbe3] bg-[#fff0f3]/80 backdrop-blur-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
            {/* Small flower icon */}
            <svg className="w-8 h-8 text-[#ff4d6d] transform group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C10.9 2 10 2.9 10 4V6H8C6.9 6 6 6.9 6 8V10H4C2.9 10 2 10.9 2 12C2 13.1 2.9 14 4 14H6V16C6 17.1 6.9 18 8 18H10V20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20V18H16C17.1 18 18 17.1 18 16V14H20C21.1 14 22 13.1 22 12C22 10.9 21.1 10 20 10H18V8C18 6.9 17.1 6 16 6H14V4C14 2.9 13.1 2 12 2ZM12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12C8 9.8 9.8 8 12 8Z" opacity="0.8" />
              <circle cx="12" cy="12" r="3" fill="#fbbf24" />
            </svg>
            <span className="self-center text-2xl font-serif font-bold whitespace-nowrap text-[#e11d48]">BeMyVal</span>
          </Link>
          <div className="flex space-x-3 md:order-2 rtl:space-x-reverse">
            <Link href="/create" className="text-white bg-[#e11d48] hover:bg-[#be123c] focus:ring-4 focus:outline-none focus:ring-[#fda4af] font-medium rounded-full text-sm px-6 py-2.5 text-center transition-all shadow-lg hover:shadow-[#fda4af]/50 hover:-translate-y-0.5">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 flex flex-col items-center text-center relative">
        {/* Floral Background Decorations */}
        <div className="absolute top-20 left-10 md:left-20 animate-float opacity-40 -z-10 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <path d="M100 20C120 60 160 80 180 100C160 120 120 140 100 180C80 140 40 120 20 100C40 80 80 60 100 20Z" fill="#fecdd3" />
            <circle cx="100" cy="100" r="15" fill="#f43f5e" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 md:right-20 animate-float-delayed opacity-40 -z-10 pointer-events-none">
          <svg width="150" height="150" viewBox="0 0 200 200" fill="none" className="transform rotate-45">
            <path d="M100 20C120 60 160 80 180 100C160 120 120 140 100 180C80 140 40 120 20 100C40 80 80 60 100 20Z" fill="#fbcfe8" />
            <circle cx="100" cy="100" r="15" fill="#db2777" />
          </svg>
        </div>

        {/* Floating petals */}
        <div className="absolute top-1/4 right-1/4 animate-sway opacity-60 -z-10 pointer-events-none text-rose-300">
          𐙚
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float opacity-50 -z-10 pointer-events-none text-rose-400 text-4xl">
          ❀
        </div>


        <span className="text-[#e11d48] font-bold tracking-widest uppercase text-xs md:text-sm mb-6 bg-white/60 px-6 py-2 rounded-full border border-[#fecdd3] shadow-sm animate-fade-in">
          The Perfect Digital Gesture
        </span>
        <h1 className="text-6xl md:text-8xl font-serif font-black text-[#881337] mb-8 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Will You Be My <br />
          <span className="text-[#e11d48] italic relative inline-block">
            Valentine?
            <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-6" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="#fb7185" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-[#9f1239]/80 max-w-2xl mb-12 leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Craft a beautiful, personalized digital experience to ask the most special question of the year. <br />Simple, elegant, and unforgettable.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-4 sm:px-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Link href="/create" className="group px-10 py-5 bg-[#e11d48] text-white rounded-full font-bold text-lg shadow-xl hover:bg-[#be123c] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto relative overflow-hidden">
            <span className="relative z-10">Create Your Card</span>
            <svg className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
          </Link>

        </div>
      </section>

      {/* Features mockup - Zig Zag Layout */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background texture helper */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>

        {/* Connecting Vine Background */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl -z-1 opacity-20 hidden md:block pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 400 1200" preserveAspectRatio="none" fill="none">
            <path d="M200,0 C200,100 100,200 100,300 C100,400 300,500 300,600 C300,700 100,800 100,900 C100,1000 200,1100 200,1200" stroke="#fecdd3" strokeWidth="4" strokeDasharray="10 10" />
          </svg>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#881337] mb-6">Why Choose BeMyVal?</h2>
            <p className="text-[#be123c]/80 max-w-2xl mx-auto text-lg">Everything you need to create the perfect moment, wrapped in love.</p>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">

            {/* Feature 1: Left Image, Right Text */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 w-full flex justify-center md:justify-end md:pr-12 group">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Organic Blob Shape 1 */}
                  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-[#ffe4e6] fill-current transform group-hover:scale-105 transition-transform duration-500">
                    <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.9,34.8C59.6,46.5,48.3,56.2,35.6,63.1C22.9,70,8.8,74.1,-4.2,81.4C-17.2,88.7,-29.1,99.2,-39.8,98.8C-50.5,98.4,-60,87.1,-67.2,74.5C-74.4,61.9,-79.3,48,-82.1,33.9C-84.9,19.8,-85.6,5.5,-82.9,-8.1C-80.2,-21.7,-74.1,-34.6,-64.5,-45.1C-54.9,-55.6,-41.8,-63.7,-28.9,-71.9C-16,-80.1,-3.3,-88.4,7.8,-88C18.9,-87.6,30.5,-103.6,44.7,-76.4Z" transform="translate(100 100)" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-7xl animate-float">
                    🎨
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full text-center md:text-left">
                <span className="text-[#e11d48] font-bold tracking-widest uppercase text-sm mb-2 block">Creative Freedom</span>
                <h3 className="text-3xl font-bold mb-4 text-[#881337]">Customizable Themes</h3>
                <p className="text-[#be123c]/80 leading-relaxed font-medium text-lg max-w-md mx-auto md:mx-0">
                  Choose from premium templates that suit your style, from minimal elegance to extravagant romance. Make it uniquely yours.
                </p>
              </div>
            </div>

            {/* Feature 2: Right Image, Left Text */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="flex-1 w-full flex justify-center md:justify-start md:pl-12 group">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Organic Blob Shape 2 */}
                  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-[#ffe4e6] fill-current transform group-hover:scale-105 transition-transform duration-500 delay-100">
                    <path d="M41.7,-70.3C52.4,-61.8,58.7,-47.4,64.4,-33.5C70.1,-19.6,75.2,-6.2,74.6,7.1C74,20.4,67.7,33.6,59.3,45.3C50.9,57,40.4,67.2,28.2,72.9C16,78.6,2.1,79.8,-11.1,78.2C-24.3,76.6,-36.8,72.2,-48.6,64.9C-60.4,57.6,-71.5,47.4,-77.8,35.3C-84.1,23.2,-85.6,9.2,-83.4,-4.1C-81.2,-17.4,-75.3,-30,-66.3,-40.4C-57.3,-50.8,-45.2,-59,-33.1,-66.4C-21,-73.8,-8.9,-80.4,4.2,-87.6C17.3,-94.8,36.9,-102.6,41.7,-70.3Z" transform="translate(100 100)" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-7xl animate-sway">
                    💌
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full text-center md:text-right">
                <span className="text-[#e11d48] font-bold tracking-widest uppercase text-sm mb-2 block">Speed of Love</span>
                <h3 className="text-3xl font-bold mb-4 text-[#881337]">Instant Delivery</h3>
                <p className="text-[#be123c]/80 leading-relaxed font-medium text-lg max-w-md mx-auto md:ml-auto md:mr-0">
                  Send your card via a unique link, email, or usage generated QR code instantly. Love shouldn&apos;t have to wait.
                </p>
              </div>
            </div>

            {/* Feature 3: Left Image, Right Text */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 w-full flex justify-center md:justify-end md:pr-12 group">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Organic Blob Shape 3 */}
                  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-[#ffe4e6] fill-current transform group-hover:scale-105 transition-transform duration-500 delay-200">
                    <path d="M43.9,-76.3C57.3,-68.8,68.9,-58.5,78.8,-46.3C88.7,-34.1,96.9,-20,95.8,-6.2C94.7,7.7,84.3,21.3,73.5,32.7C62.7,44.1,51.5,53.3,39.6,59.9C27.7,66.5,15.1,70.5,2.0,67C-11.1,63.5,-24.7,52.5,-37.2,42.8C-49.7,33.1,-61,24.7,-68.3,13.2C-75.6,1.7,-78.9,-12.9,-75.4,-26.1C-71.9,-39.3,-61.6,-51.1,-49.4,-60.8C-37.2,-70.5,-23.1,-78.1,-8.5,-76.3C6.1,-74.5,22.2,-63.3,43.9,-76.3Z" transform="translate(100 100)" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-7xl animate-float-delayed">
                    💝
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full text-center md:text-left">
                <span className="text-[#e11d48] font-bold tracking-widest uppercase text-sm mb-2 block">Magic Moments</span>
                <h3 className="text-3xl font-bold mb-4 text-[#881337]">Interactive Experience</h3>
                <p className="text-[#be123c]/80 leading-relaxed font-medium text-lg max-w-md mx-auto md:mx-0">
                  Rich animations, confetti explosions, and interactive elements make your proposal truly magical and unforgettable.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4c0519] text-[#ffdbe3] py-16 border-t border-[#881337] relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#e11d48] rounded-full flex items-center justify-center ring-8 ring-[#fff0f3]">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 text-center mt-8">
          <p className="font-serif text-4xl mb-6 font-bold tracking-tight">BeMyVal</p>
          <div className="flex justify-center space-x-6 mb-8 text-[#fecdd3]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span className="opacity-50">•</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span className="opacity-50">•</span>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm opacity-60 font-light">&copy; {new Date().getFullYear()} Made with love for lovers everywhere.</p>
        </div>
      </footer>
    </div>
  );
}
