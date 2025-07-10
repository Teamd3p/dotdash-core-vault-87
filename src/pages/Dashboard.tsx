import React from 'react';
import StatCard from '@/components/dashboard/StatCard';
import RecentActivityCard from '@/components/dashboard/RecentActivityCard';
import { Key, Lock, FileText, Database, ShieldCheck, Globe, Cpu, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Dashboard = () => {
  const recentActivities = [
    {
      id: '1',
      action: 'New key generated',
      user: 'John Smith',
      time: '2 minutes ago',
      details: 'AES-256 key for API Server'
    },
    {
      id: '2',
      action: 'Vault backup completed',
      user: 'System',
      time: '1 hour ago',
      details: '156 items backed up successfully'
    },
    {
      id: '3',
      action: 'User access granted',
      user: 'Admin',
      time: '3 hours ago',
      details: 'Read access granted to Sarah Johnson'
    },
    {
      id: '4',
      action: 'Security scan completed',
      user: 'System',
      time: '1 day ago', 
      details: 'All systems secure, no vulnerabilities detected'
    }
  ];

  return (
    <div className="space-y-6 relative">
      <div className="relative z-10">
        <h1 className="text-2xl font-medium mb-2">Dashboard</h1>
        <p className="text-vault-muted">Security overview and recent activity</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <StatCard
            title="Active Vault Items"
            value="156"
            icon={<Lock size={24} className="text-teal-300" />}
            trend={{ value: "12%", positive: true }}
          />
          
          <StatCard
            title="Active Keys"
            value="47"
            icon={<Key size={24} className="text-amber-300" />}
            trend={{ value: "5%", positive: true }}
          />
          
          <StatCard
            title="Secure Files"
            value="284"
            icon={<FileText size={24} className="text-sky-300" />}
            description="Total encrypted files in storage"
          />
          
          <StatCard
            title="Last Backup"
            value="2 hours ago"
            icon={<Database size={24} className="text-rose-300" />}
            description="Next backup in 22 hours"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <RecentActivityCard
              title="Recent Activity"
              activities={recentActivities}
            />
          </div>
          
          <div className="glass-card p-6 backdrop-blur-sm bg-[#1A1F2C]/70 border border-white/10">
            <h3 className="text-sm font-medium text-vault-muted mb-4">System Status</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">AES Encryption</span>
                  <span className="text-xs text-green-400">Active</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-full rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">HMAC Status</span>
                  <span className="text-xs text-green-400">Verified</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-full rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">System Resources</span>
                  <span className="text-xs text-vault-muted">78%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-vault-accent w-[78%] rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Storage</span>
                  <span className="text-xs text-vault-muted">45%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-vault-secondary w-[45%] rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/10">
              <h4 className="text-sm font-medium mb-2">Key Backup Logs</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-vault-muted">Daily Backup</span>
                  <span className="text-green-400">Successful</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-vault-muted">Weekly Backup</span>
                  <span className="text-green-400">Successful</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-vault-muted">Monthly Backup</span>
                  <span className="text-green-400">Successful</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
