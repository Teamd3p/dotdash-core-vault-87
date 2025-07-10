
import React from 'react';
import { Github, Linkedin, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 bg-vault-DEFAULT border-t border-white/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-purple-300 mr-2" />
            <span className="text-white font-medium">DotDash VaultCore</span>
            <span className="text-xs text-white ml-2">v1.0.3</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0">
            <div className="flex space-x-4 md:mr-8">
              <a href="#" className="text-vault-muted hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-vault-muted hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-xs text-vault-muted hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-xs text-vault-muted hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-xs text-vault-muted hover:text-white transition-colors">Legal</a>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-white/5">
          <p className="text-xs text-center text-white">
            © {new Date().getFullYear()} DotDash Security Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
