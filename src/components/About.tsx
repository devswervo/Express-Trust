interface AboutProps {
  id: string;
}

const About = ({ id }: AboutProps) => {
  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Trust Services</h2>
            <p className="text-xl text-gray-600">
              Dedicated to creating bulletproof Express Trusts that stand the test of legal scrutiny.
            </p>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <p>
              Our trust services are built on a foundation of meticulous attention to detail and deep understanding of Express Trusts under common law. We specialize in creating trust documents that follow rules and laws so meticulously that every trust we write is bulletproof against legal challenges.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Our Approach</h3>
            <p>
              We've developed a comprehensive system that combines thorough client intake, precise document drafting, and advanced AI-assisted review to ensure each trust meets the highest standards of legal precision and protection.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Our Expertise</h3>
            <p>
              Our expertise is based on extensive study of trust law principles, particularly as outlined in Weiss's Concise Trustee Handbook and other authoritative sources on Express Trusts under common law. We stay current with legal developments to ensure our trust documents remain effective and resilient.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Our Commitment</h3>
            <p>
              We are committed to providing personalized service that addresses your specific needs and circumstances. Each trust we create is custom-crafted to achieve your objectives while maintaining the highest standards of legal integrity.
            </p>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-2">Our Process</h4>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Comprehensive client consultation and information gathering</li>
                <li>Detailed analysis of your specific needs and objectives</li>
                <li>Custom drafting of trust documents using our proprietary system</li>
                <li>Thorough review and refinement to ensure legal precision</li>
                <li>Clear guidance on proper execution and implementation</li>
                <li>Ongoing support for trust administration</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
