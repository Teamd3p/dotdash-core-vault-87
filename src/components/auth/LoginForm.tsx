import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Key, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Login successful');
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
        <h2 className="text-xl font-medium mb-6">Sign In</h2>
        
        <form onSubmit={handleLogin}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-vault-muted">Email</label>
              <Input 
                id="email" 
                type="email" 
                placeholder="admin@example.com" 
                required
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
                className="border-white/10 bg-white/5 focus:border-vault-accent animate-glow"
              />
            </div>
            
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded border-white/20 bg-white/5 text-vault-accent"
                />
                <label htmlFor="remember" className="text-vault-muted">Remember me</label>
              </div>
              <a href="#" className="text-vault-accent hover:text-white transition-colors">Forgot password?</a>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-purple-300 hover:bg-purple-400 text-purple-950"
              disabled={isLoading}
            >
              {isLoading ? 'Authenticating...' : 'Sign In'}
            </Button>
          </div>
        </form>
        
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-purple-300 hover:underline">
            Create Account
          </Link>
        </div>
        
        <div className="mt-4 relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/10"></span>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-2 bg-vault-DEFAULT text-vault-muted">Or continue with</span>
          </div>
        </div>
        
        <Button 
          className="w-full mt-4 bg-white/5 text-white hover:bg-white/10 border border-white/10"
          onClick={() => {
            toast.success('Hardware key authenticated');
            navigate('/dashboard');
          }}
        >
          <Key size={16} className="mr-2" />
          Login with Key
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
