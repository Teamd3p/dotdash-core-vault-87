
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Download, Upload, Search, Copy, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

type KeyItem = {
  id: string;
  uuid: string;
  hashPreview: string;
  createdDate: string;
  type: string;
  status: 'active' | 'revoked';
};

const mockKeysData: KeyItem[] = [
  {
    id: 'k-1',
    uuid: '8f7d3e2a-9c0b-4d1e-8f7d-3e2a9c0b4d1e',
    hashPreview: '7ae8c13f...5e2d98a',
    createdDate: '2025-05-10',
    type: 'AES-256',
    status: 'active'
  },
  {
    id: 'k-2',
    uuid: '2c0b4d1e-8f7d-3e2a-9c0b-4d1e8f7d3e2a',
    hashPreview: '9f3e7b2d...8a4c59b',
    createdDate: '2025-05-01',
    type: 'RSA-4096',
    status: 'active'
  },
  {
    id: 'k-3',
    uuid: '3e2a9c0b-4d1e-8f7d-3e2a-9c0b4d1e8f7d',
    hashPreview: '5e2d98a7...3f7ae8c1',
    createdDate: '2025-04-22',
    type: 'ECDSA',
    status: 'active'
  },
  {
    id: 'k-4',
    uuid: '4d1e8f7d-3e2a-9c0b-4d1e-8f7d3e2a9c0b',
    hashPreview: '1a2b3c4d...5e6f7g8h',
    createdDate: '2025-04-15',
    type: 'AES-256',
    status: 'revoked'
  }
];

const KeysManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<KeyItem[]>(mockKeysData);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (!term) {
      setFilteredData(mockKeysData);
      return;
    }
    
    const filtered = mockKeysData.filter(
      item => item.uuid.toLowerCase().includes(term.toLowerCase()) ||
              item.hashPreview.toLowerCase().includes(term.toLowerCase()) ||
              item.type.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
  };
  
  const handleGenerateKey = () => {
    toast.success('New key generated successfully');
  };
  
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-vault-muted" />
          <Input
            placeholder="Search keys..."
            className="pl-10 border-white/10 bg-white/5 focus:border-purple-300"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        
        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
          <Button className="bg-purple-300 hover:bg-purple-400 text-purple-950" onClick={handleGenerateKey}>
            <RefreshCw size={16} className="mr-2" />
            Generate New Key
          </Button>
          
          <Button variant="outline" className="border-white/10 text-vault-muted hover:text-white bg-white/5">
            <Upload size={16} className="mr-2" />
            Import
          </Button>
          
          <Button variant="outline" className="border-white/10 text-vault-muted hover:text-white bg-white/5">
            <Download size={16} className="mr-2" />
            Export
          </Button>
        </div>
      </div>
      
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 text-xs font-medium text-vault-muted">UUID</th>
                <th className="text-left p-4 text-xs font-medium text-vault-muted">Hash Preview</th>
                <th className="text-left p-4 text-xs font-medium text-vault-muted">Created Date</th>
                <th className="text-left p-4 text-xs font-medium text-vault-muted">Type</th>
                <th className="text-left p-4 text-xs font-medium text-vault-muted">Status</th>
                <th className="text-right p-4 text-xs font-medium text-vault-muted">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center">
                      <code className="font-mono text-sm">{item.uuid}</code>
                      <button 
                        className="ml-2 text-vault-muted hover:text-white" 
                        onClick={() => handleCopy(item.uuid)}
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                  </td>
                  <td className="p-4">
                    <code className="font-mono text-sm text-vault-muted">{item.hashPreview}</code>
                  </td>
                  <td className="p-4 text-sm text-vault-muted">{item.createdDate}</td>
                  <td className="p-4 text-sm text-vault-muted">{item.type}</td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.status === 'active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Button variant="ghost" className="h-8 px-2 text-vault-muted hover:text-white">View</Button>
                    <Button 
                      variant="ghost" 
                      className="h-8 px-2 text-vault-muted hover:text-white"
                      disabled={item.status === 'revoked'}
                    >
                      Use
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

export default KeysManagement;
