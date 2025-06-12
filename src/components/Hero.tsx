const Hero = () => {
  return (
    <div className="bg-blue-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bulletproof Express Trust Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Creating meticulously crafted, legally sound Express Trusts under common law
            that protect your assets and preserve your legacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium text-center"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
