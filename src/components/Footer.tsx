const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Express Trust Services</h3>
            <p className="text-gray-300">
              Creating bulletproof Express Trusts under common law that protect your assets and preserve your legacy.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@expresstrustservices.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Hours: Monday-Friday, 9am-5pm</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Express Trust Services. All rights reserved.</p>
          <p className="mt-2 text-sm">
            This website provides information about Express Trusts under common law. 
            It is not legal advice and does not create an attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
