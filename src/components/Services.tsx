interface ServicesProps {
  id: string;
}

const Services = ({ id }: ServicesProps) => {
  const services = [
    {
      title: "Express Trust Creation",
      description: "Custom-crafted Express Trusts under common law, meticulously designed to protect your assets and provide maximum legal protection.",
      icon: "📝"
    },
    {
      title: "Trust Document Customization",
      description: "Personalized trust documents tailored to your specific needs using our comprehensive intake process and AI-driven document generation.",
      icon: "🔧"
    },
    {
      title: "Asset Protection Planning",
      description: "Strategic planning to shield your assets from potential creditors, lawsuits, and other threats through properly structured Express Trusts.",
      icon: "🛡️"
    },
    {
      title: "Trust Administration Support",
      description: "Ongoing guidance and support for trustees to ensure proper trust administration and compliance with all legal requirements.",
      icon: "📊"
    },
    {
      title: "Document Review & Updates",
      description: "Regular review and updates to your trust documents to ensure they remain current with changing circumstances and legal developments.",
      icon: "🔍"
    },
    {
      title: "Educational Workshops",
      description: "Informative sessions to help you understand the benefits and operation of Express Trusts under common law.",
      icon: "🎓"
    }
  ];

  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive Express Trust services designed to create bulletproof legal structures that protect your assets and legacy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-blue-700 text-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium"
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
