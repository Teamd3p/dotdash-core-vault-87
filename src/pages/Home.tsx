
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Key, FileText, Users, Activity } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gradient">
          SecureVault
        </h1>
        <p className="text-xl text-vault-muted max-w-2xl mx-auto">
          Your ultimate secure file storage and encryption platform. Protect your sensitive data with military-grade encryption.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="glass-card">
          <CardHeader className="text-center">
            <Shield className="w-12 h-12 text-purple-300 mx-auto mb-2" />
            <CardTitle className="text-lg">Military-Grade Encryption</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-vault-muted">
              Protect your files with AES-256 encryption, the same standard used by governments and military organizations worldwide.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="text-center">
            <Lock className="w-12 h-12 text-purple-300 mx-auto mb-2" />
            <CardTitle className="text-lg">Secure Storage</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-vault-muted">
              Store your encrypted files in our secure vault with redundant backups and 99.9% uptime guarantee.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="text-center">
            <Key className="w-12 h-12 text-purple-300 mx-auto mb-2" />
            <CardTitle className="text-lg">Key Management</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-vault-muted">
              Advanced key management system ensures only you have access to your encrypted data.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* How to Use Section */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">How to Use SecureVault</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-300 text-purple-950 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <CardTitle className="text-lg">Upload & Encrypt</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-vault-muted">
                Navigate to the Encryption page, select your file, choose a strong password, and let our system encrypt your data securely.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-300 text-purple-950 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <CardTitle className="text-lg">Store in Vault</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-vault-muted">
                Your encrypted files are automatically stored in your personal vault, accessible only with your credentials.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-300 text-purple-950 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <CardTitle className="text-lg">Manage & Organize</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-vault-muted">
                Use tags, notes, and expiry dates to organize your files. Access them anytime from your vault dashboard.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-300 text-purple-950 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <CardTitle className="text-lg">Secure Access</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-vault-muted">
                Download and decrypt your files when needed. All activities are logged for your security and peace of mind.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card text-center">
          <CardContent className="pt-6">
            <FileText className="w-8 h-8 text-purple-300 mx-auto mb-2" />
            <div className="text-2xl font-bold">1,000+</div>
            <div className="text-vault-muted">Files Encrypted</div>
          </CardContent>
        </Card>

        <Card className="glass-card text-center">
          <CardContent className="pt-6">
            <Users className="w-8 h-8 text-purple-300 mx-auto mb-2" />
            <div className="text-2xl font-bold">500+</div>
            <div className="text-vault-muted">Active Users</div>
          </CardContent>
        </Card>

        <Card className="glass-card text-center">
          <CardContent className="pt-6">
            <Activity className="w-8 h-8 text-purple-300 mx-auto mb-2" />
            <div className="text-2xl font-bold">99.9%</div>
            <div className="text-vault-muted">Uptime</div>
          </CardContent>
        </Card>
      </div>

      {/* Getting Started */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Ready to Get Started?</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-vault-muted">
            Start securing your files today with SecureVault's advanced encryption technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/encryption" 
              className="bg-purple-300 hover:bg-purple-400 text-purple-950 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Encrypt Your First File
            </a>
            <a 
              href="/vault" 
              className="border border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-950 px-6 py-3 rounded-md font-medium transition-colors"
            >
              View Your Vault
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
