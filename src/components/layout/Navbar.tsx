import React, { useState } from 'react';
import { Bell, Settings, User, UserPlus, Home } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [notifications, setNotifications] = useState(3);

  return (
    <div className="w-full h-16 px-4 flex items-center justify-between border-b border-white/10">
      <div className="flex items-center space-x-4">
        <Link to="/home">
          <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
            <Home size={16} className="mr-2" />
            Home
          </Button>
        </Link>
      </div>
      
      <div className="flex-1"></div>
      
      <div className="flex items-center space-x-4">
        <Link to="/register">
          <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10">
            <UserPlus size={16} className="mr-2" />
            Register
          </Button>
        </Link>
        
        <Popover>
          <PopoverTrigger asChild>
            <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors">
              <Bell size={20} className="text-vault-muted hover:text-white transition-colors" />
              {notifications > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-vault-accent rounded-full"></span>
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0 glass">
            <div className="p-4 border-b border-white/10">
              <h3 className="font-medium">Notifications</h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-vault-accent"></div>
                  <div>
                    <p className="text-sm font-medium">New key generated</p>
                    <p className="text-xs text-vault-muted">UUID: 8f7d3e2a-9c0b-4d1e-8f7d-3e2a9c0b4d1e</p>
                    <p className="text-xs text-vault-muted">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-vault-accent"></div>
                  <div>
                    <p className="text-sm font-medium">Security scan completed</p>
                    <p className="text-xs text-vault-muted">All systems secure</p>
                    <p className="text-xs text-vault-muted">1 hour ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-vault-accent"></div>
                  <div>
                    <p className="text-sm font-medium">Backup successfully created</p>
                    <p className="text-xs text-vault-muted">Encrypted backup size: 2.3GB</p>
                    <p className="text-xs text-vault-muted">Yesterday at 11:42 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 border-t border-white/10">
              <button className="w-full py-1 text-xs text-center text-vault-accent hover:text-white transition-colors">
                View all notifications
              </button>
            </div>
          </PopoverContent>
        </Popover>
        
        <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
          <Settings size={20} className="text-vault-muted hover:text-white transition-colors" />
        </button>
        
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center space-x-2">
              <Avatar className="h-8 w-8 border border-white/20">
                <AvatarImage src="" />
                <AvatarFallback className="bg-vault-accent/20 text-vault-accent">JS</AvatarFallback>
              </Avatar>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-0 glass">
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10 border border-white/20">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-vault-accent/20 text-vault-accent">JS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Smith</p>
                  <p className="text-xs text-vault-muted">Security Admin</p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <button className="flex items-center w-full space-x-2 p-2 rounded hover:bg-white/5 transition-colors">
                <User size={16} className="text-vault-muted" />
                <span className="text-sm">Profile</span>
              </button>
              <button className="flex items-center w-full space-x-2 p-2 rounded hover:bg-white/5 transition-colors">
                <Settings size={16} className="text-vault-muted" />
                <span className="text-sm">Settings</span>
              </button>
              <div className="my-2 border-t border-white/10"></div>
              <button className="flex items-center w-full space-x-2 p-2 rounded hover:bg-white/5 transition-colors text-vault-secondary">
                <span className="text-sm">Sign out</span>
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
