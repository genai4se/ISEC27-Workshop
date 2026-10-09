const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GenAI&amp;SE 2027</h3>
            <p className="text-white/80 leading-relaxed">
              Fourth Workshop on Generative AI and Software Engineering — Co-Pilots to Actors. ISEC&apos;27, SPIT Mumbai, India.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#discussion" className="hover:text-white transition-colors">Key Topics of Discussion</a></li>
              <li><a href="#format" className="hover:text-white transition-colors">Workshop Format</a></li>
              <li><a href="#organizers" className="hover:text-white transition-colors">Organizers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Past Conferences</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="https://genai4se.github.io/ISEC-Workshop/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ISEC&apos;24</a></li>
              <li><a href="https://genai4se.github.io/ISEC25-Workshop/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ISEC&apos;25</a></li>
              <li><a href="https://genai4se.github.io/ISEC26-Workshop/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ISEC&apos;26</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Conference</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="https://conf.researchr.org/home/isec-2027" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ISEC'27 Website</a></li>
              <li><a href="https://www.acm.org/publications/proceedings-template" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ACM Template</a></li>
              <li><a href="mailto:genai4se@googlegroups.com" className="hover:text-white transition-colors">Contact Organizers</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-white/70">
          <p>&copy; 2027 Fourth Workshop on Generative AI and Software Engineering (GenAI&amp;SE), part of ISEC&apos;27.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
