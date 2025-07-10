
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Key, Shield, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Registration successful');
      navigate('/dashboard');
    }, 1500);
  };
  
  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <Shield size={48} className="mx-auto text-purple-500 mb-4" />
        <h1 className="text-2xl font-medium mb-2 text-white">DotDash VaultCore</h1>
        <p className="text-white text-sm">Security Beyond Encryption</p>
      </div>
      
      <div className="glass-card p-8">
        <h2 className="text-xl font-medium mb-6">Create Account</h2>
        
        <form onSubmit={handleRegister}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-vault-muted">Full Name</label>
              <Input 
                id="name" 
                type="text" 
                placeholder="John Smith" 
                required
                value={formData.name}
                onChange={handleChange}
                className="border-white/10 bg-white/5 focus:border-vault-accent animate-glow"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-vault-muted">Email</label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                required
                value={formData.email}
                onChange={handleChange}
                className="border-white/10 bg-white/5 focus:border-vault-accent animate-glow"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-vault-muted">Password</label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                required
                value={formData.password}
                onChange={handleChange}
                className="border-white/10 bg-white/5 focus:border-vault-accent animate-glow"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm text-vault-muted">Confirm Password</label>
              <Input 
                id="confirmPassword" 
                type="password" 
                placeholder="••••••••" 
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="border-white/10 bg-white/5 focus:border-vault-accent animate-glow"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-purple-300 hover:bg-purple-400 text-purple-950"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </div>
        </form>
        
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-300 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
