
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Plus, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

type VaultItem = {
  id: string;
  name: string;
  type: string;
  dateAdded: string;
  lastAccessed: string;
  status: 'active' | 'archived';
};

const mockVaultData: VaultItem[] = [
  {
    id: 'v-1',
    name: 'API Server Keys',
    type: 'Key Bundle',
    dateAdded: '2025-04-12',
    lastAccessed: '2025-05-10',
    status: 'active'
  },
  {
    id: 'v-2',
    name: 'Database Credentials',
    type: 'Credential',
    dateAdded: '2025-03-18',
    lastAccessed: '2025-05-11',
    status: 'active'
  },
  {
    id: 'v-3',
    name: 'AWS Access Keys',
    type: 'Key Bundle',
    dateAdded: '2025-02-21',
    lastAccessed: '2025-05-07',
    status: 'active'
  },
  {
    id: 'v-4',
    name: 'SSL Certificates',
    type: 'Certificate',
    dateAdded: '2025-01-30',
    lastAccessed: '2025-04-25',
    status: 'active'
  },
  {
    id: 'v-5',
    name: 'Legacy App Credentials',
    type: 'Credential',
    dateAdded: '2024-11-15',
    lastAccessed: '2025-03-22',
    status: 'archived'
  }
];

const VaultTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<VaultItem[]>(mockVaultData);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (!term) {
      setFilteredData(mockVaultData);
      return;
    }
    
    const filtered = mockVaultData.filter(
      item => item.name.toLowerCase().includes(term.toLowerCase()) ||
              item.type.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-vault-muted" />
          <Input
            placeholder="Search vault items..."
            className="pl-10 border-white/10 bg-white/5 focus:border-vault-accent"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <Button variant="outline" className="border-white/10 text-vault-muted hover:text-white bg-white/5">
            <Filter size={16} className="mr-2" />
            Filter
          </Button>
          
          <Button>
            <Plus size={16} className="mr-2" />
            Add New Item
          </Button>
        </div>
      </div>
      
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 text-xs font-medium text-vault-muted">Name</th>
                <th className="text-left p-4 text-xs font-medium text-vault-muted">Type</th>
                <th className="text-left p-4 text-xs font-medium text-vault-muted">Date Added</th>
                <th className="text-left p-4 text-xs font-medium text-vault-muted">Last Accessed</th>
                <th className="text-left p-4 text-xs font-medium text-vault-muted">Status</th>
                <th className="text-right p-4 text-xs font-medium text-vault-muted">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <div className="font-medium">{item.name}</div>
                  </td>
                  <td className="p-4 text-sm text-vault-muted">{item.type}</td>
                  <td className="p-4 text-sm text-vault-muted">{item.dateAdded}</td>
                  <td className="p-4 text-sm text-vault-muted">{item.lastAccessed}</td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.status === 'active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Button variant="ghost" className="h-8 px-2 text-vault-muted hover:text-white">View</Button>
                    <Button variant="ghost" className="h-8 px-2 text-vault-muted hover:text-white">Edit</Button>
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

export default VaultTable;
