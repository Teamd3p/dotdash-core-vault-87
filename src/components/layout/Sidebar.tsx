
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Lock, Settings, Shield, FileKey, File, List } from 'lucide-react';

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive?: boolean;
}

const NavItem = ({ icon, label, to, isActive = false }: NavItemProps) => {
  return (
    <Link to={to} className={`
      flex items-center space-x-3 px-3 py-2 rounded-lg text-sm
      ${isActive 
        ? 'bg-vault-accent/20 text-white' 
        : 'text-white hover:text-white hover:bg-white/5'
      }
      transition-all duration-200
    `}>
      <div>{icon}</div>
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Updated order of navigation items as requested
  const navItems = [
    { label: 'Dashboard', icon: <LayoutDashboard size={20} />, to: '/dashboard' },
    { label: 'Vault', icon: <Lock size={20} className="text-teal-300" />, to: '/vault' },
    { label: 'Encryption', icon: <FileKey size={20} className="text-amber-300" />, to: '/encryption' },
    { label: 'Files', icon: <File size={20} className="text-sky-300" />, to: '/files' },
    { label: 'Logs', icon: <List size={20} className="text-rose-300" />, to: '/logs' },
    { label: 'Settings', icon: <Settings size={20} />, to: '/settings' },
  ];

  return (
    <div className="hidden md:flex flex-col w-64 bg-[#1A1F2C] border-r border-white/10">
      <div className="h-16 flex items-center px-6 border-b border-white/10">
        <Shield className="h-6 w-6 text-purple-300" />
        <span className="ml-2 font-medium text-white">DotDash VaultCore</span>
      </div>
      
      <div className="flex-1 py-6 px-3 space-y-1">
        {navItems.map((item) => (
          <NavItem 
            key={item.label} 
            icon={item.icon} 
            label={item.label} 
            to={item.to} 
            isActive={currentPath === item.to}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
