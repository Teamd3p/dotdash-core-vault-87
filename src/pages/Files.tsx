
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, UploadCloud, File, FileText, FileLock2, FileX2, Download, Trash2, Unlock, Lock } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type FileEntry = {
  id: string;
  timestamp: string;
  name: string;
  size: string;
  type: string;
};

type FileItem = {
  id: string;
  title: string;
  createdAt: string;
  entries: FileEntry[];
};

const mockFilesData: FileItem[] = [
  {
    id: 'file-group-1',
    title: 'Financial Reports',
    createdAt: '2025-05-01',
    entries: [
      {
        id: 'entry-1-1',
        timestamp: '2025-05-01 14:32',
        name: 'Q1_financial_report.xlsx',
        size: '1.4 MB',
        type: 'Spreadsheet'
      },
      {
        id: 'entry-1-2',
        timestamp: '2025-04-05 09:12',
        name: 'Annual_budget_2025.xlsx',
        size: '2.8 MB',
        type: 'Spreadsheet'
      },
      {
        id: 'entry-1-3',
        timestamp: '2025-03-20 16:45',
        name: 'Tax_documents_2024.pdf',
        size: '5.2 MB',
        type: 'Document'
      }
    ]
  },
  {
    id: 'file-group-2',
    title: 'Client Database Backups',
    createdAt: '2025-04-28',
    entries: [
      {
        id: 'entry-2-1',
        timestamp: '2025-04-28 23:00',
        name: 'client_db_backup.sql',
        size: '24.8 MB',
        type: 'Database'
      },
      {
        id: 'entry-2-2',
        timestamp: '2025-04-21 23:00',
        name: 'client_db_backup_weekly.sql',
        size: '22.5 MB',
        type: 'Database'
      },
      {
        id: 'entry-2-3',
        timestamp: '2025-04-25 18:30',
        name: 'client_documentation.doc',
        size: '3.2 MB',
        type: 'Word'
      }
    ]
  },
  {
    id: 'file-group-3',
    title: 'Product Specifications',
    createdAt: '2025-04-15',
    entries: [
      {
        id: 'entry-3-1',
        timestamp: '2025-04-15 10:22',
        name: 'product_spec_v2.pdf',
        size: '3.2 MB',
        type: 'Document'
      },
      {
        id: 'entry-3-2',
        timestamp: '2025-04-14 16:18',
        name: 'component_diagrams.pdf',
        size: '8.7 MB',
        type: 'Document'
      },
      {
        id: 'entry-3-3',
        timestamp: '2025-04-10 11:05',
        name: 'prototype_photos.zip',
        size: '45.6 MB',
        type: 'Archive'
      }
    ]
  },
  {
    id: 'file-group-4',
    title: 'Security Audits',
    createdAt: '2025-03-22',
    entries: [
      {
        id: 'entry-4-1',
        timestamp: '2025-03-22 08:45',
        name: 'security_audit_2025.zip',
        size: '18.7 MB',
        type: 'Archive'
      },
      {
        id: 'entry-4-2',
        timestamp: '2025-03-22 08:40',
        name: 'vulnerability_assessment.pdf',
        size: '2.3 MB',
        type: 'Document'
      }
    ]
  }
];

const Files = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [files, setFiles] = useState<FileItem[]>(mockFilesData);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  
  // Toggle file group visibility
  const toggleGroup = (id: string) => {
    setOpenGroups(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // Filter files based on search query
  const filteredFiles = files.filter(fileGroup => {
    // Check if the title matches
    if (fileGroup.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return true;
    }
    
    // Check if any entry in the file group matches
    const hasMatchingEntry = fileGroup.entries.some(entry => 
      entry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    return hasMatchingEntry;
  });
  
  const getFileIcon = (type: string) => {
    switch (type) {
      case 'Document':
        return <FileLock2 className="text-orange-400" />;
      case 'Spreadsheet':
        return <FileLock2 className="text-green-400" />;
      case 'Database':
        return <FileLock2 className="text-vault-secondary" />;
      case 'Archive':
        return <FileLock2 className="text-amber-400" />;
      case 'Word':
        return <FileLock2 className="text-blue-400" />;
      default:
        return <File className="text-vault-muted" />;
    }
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium mb-2">Secure Files</h1>
      <p className="text-vault-muted">Manage your encrypted files and documents</p>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-vault-muted" />
          <Input
            placeholder="Search files..."
            className="pl-10 border-white/10 bg-white/5 focus:border-vault-accent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <Button variant="outline" className="border-white/10 text-vault-muted hover:text-white hover:bg-purple-300/20 bg-white/5">
            <Filter size={16} className="mr-2" />
            Filter
          </Button>
          
          <Button>
            <UploadCloud size={16} className="mr-2" />
            Upload Files
          </Button>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-lg border border-white/10">
        {filteredFiles.length > 0 ? (
          <div className="space-y-4">
            {filteredFiles.map((fileGroup) => (
              <Collapsible
                key={fileGroup.id}
                open={openGroups[fileGroup.id]}
                onOpenChange={() => toggleGroup(fileGroup.id)}
                className="border border-white/10 rounded-lg overflow-hidden"
              >
                <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/5 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white/5 rounded-md">
                        <FileText className="text-vault-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium">{fileGroup.title}</h3>
                        <p className="text-sm text-vault-muted">
                          Created: {fileGroup.createdAt} · {fileGroup.entries.length} files
                        </p>
                      </div>
                    </div>
                    <div className={`transition-transform duration-300 ${openGroups[fileGroup.id] ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="border-t border-white/10 px-4 py-2 bg-white/5">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-vault-muted text-xs">
                          <th className="p-2">Name</th>
                          <th className="p-2">Type</th>
                          <th className="p-2">Size</th>
                          <th className="p-2">Timestamp</th>
                          <th className="p-2 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fileGroup.entries.map((entry) => (
                          <tr key={entry.id} className="border-t border-white/5 hover:bg-white/5">
                            <td className="p-2">
                              <div className="flex items-center space-x-2">
                                {getFileIcon(entry.type)}
                                <span>{entry.name}</span>
                              </div>
                            </td>
                            <td className="p-2 text-sm">{entry.type}</td>
                            <td className="p-2 text-sm">{entry.size}</td>
                            <td className="p-2 text-sm">{entry.timestamp}</td>
                            <td className="p-2 text-right space-x-2">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="Decrypt">
                                <Unlock size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="Download">
                                <Download size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:text-red-400" title="Delete">
                                <Trash2 size={16} />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <FileX2 className="w-12 h-12 text-vault-muted mb-4" />
            <h3 className="text-lg font-medium mb-2">No files found</h3>
            <p className="text-vault-muted text-center max-w-md mb-6">
              {searchQuery 
                ? "No files match your search query. Try a different search term."
                : "You haven't uploaded any files yet. Upload your first encrypted file to get started."}
            </p>
            {!searchQuery && (
              <Button>
                <UploadCloud size={16} className="mr-2" />
                Upload Files
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Files;
