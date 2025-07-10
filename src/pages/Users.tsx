
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus, UserCog } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type UserItem = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  lastLogin: string;
};

const mockUsersData: UserItem[] = [
  {
    id: 'u-1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2025-05-11 09:45 AM'
  },
  {
    id: 'u-2',
    name: 'Sarah Johnson',
    email: 'sjohnson@example.com',
    role: 'Security Analyst',
    status: 'active',
    lastLogin: '2025-05-10 04:12 PM'
  },
  {
    id: 'u-3',
    name: 'Michael Chen',
    email: 'mchen@example.com',
    role: 'Key Manager',
    status: 'active',
    lastLogin: '2025-05-09 11:30 AM'
  },
  {
    id: 'u-4',
    name: 'Emily Rodriguez',
    email: 'erodriguez@example.com',
    role: 'Auditor',
    status: 'active',
    lastLogin: '2025-05-08 02:15 PM'
  },
  {
    id: 'u-5',
    name: 'David Kim',
    email: 'dkim@example.com',
    role: 'Read-only User',
    status: 'inactive',
    lastLogin: '2025-04-22 10:20 AM'
  }
];

const getInitials = (name: string) => {
  return name.split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
};

const Users = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium mb-2">Users</h1>
      <p className="text-vault-muted">Manage users and access permissions</p>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-vault-muted" />
          <Input
            placeholder="Search users..."
            className="pl-10 border-white/10 bg-white/5 focus:border-vault-accent"
          />
        </div>
        
        <Button className="bg-vault-accent hover:bg-vault-accent/80 text-white">
          <Plus size={16} className="mr-2" />
          Add User
        </Button>
      </div>
      
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 text-xs font-medium text-vault-muted">User</th>
                <th className="text-left p-4 text-xs font-medium text-vault-muted">Role</th>
                <th className="text-left p-4 text-xs font-medium text-vault-muted">Status</th>
                <th className="text-left p-4 text-xs font-medium text-vault-muted">Last Login</th>
                <th className="text-right p-4 text-xs font-medium text-vault-muted">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockUsersData.map((user) => (
                <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8 border border-white/20">
                        <AvatarImage src="" />
                        <AvatarFallback className={`${
                          user.status === 'active' ? 'bg-vault-accent/20 text-vault-accent' : 'bg-vault-muted/20 text-vault-muted'
                        }`}>
                          {getInitials(user.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-xs text-vault-muted">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm">{user.role}</td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      user.status === 'active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-vault-muted/20 text-vault-muted'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-vault-muted">{user.lastLogin}</td>
                  <td className="p-4 text-right">
                    <Button variant="ghost" className="h-8 px-2 text-vault-muted hover:text-white">
                      <UserCog size={16} />
                      <span className="ml-2">Manage</span>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
