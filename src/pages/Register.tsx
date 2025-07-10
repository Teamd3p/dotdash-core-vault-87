
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; 
import RegisterForm from '@/components/auth/RegisterForm';

const Register = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-vault"
      style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(155, 135, 245, 0.1) 0%, transparent 30%), radial-gradient(circle at 75% 75%, rgba(51, 195, 240, 0.1) 0%, transparent 30%)'
      }}
    >
      <div className="absolute top-6 left-6">
        <Link 
          to="/dashboard" 
          className="flex items-center text-white hover:text-purple-300 transition-colors"
        >
          <ArrowLeft size={20} className="mr-1" />
          <span>Back</span>
        </Link>
      </div>
      
      <RegisterForm />
      
      <div className="mt-8 text-center text-xs text-vault-muted">
        <p>© 2025 DotDash Security Inc. All rights reserved.</p>
        <div className="mt-1 flex justify-center space-x-4">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
