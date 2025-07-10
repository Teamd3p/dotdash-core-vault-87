
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

type LogEntry = {
  id: string;
  timestamp: string;
  level: 'info' | 'warning' | 'error';
  source: string;
  message: string;
  details?: string;
};

const mockLogsData: LogEntry[] = [
  {
    id: 'log-1',
    timestamp: '2025-05-12 08:32:15',
    level: 'info',
    source: 'System',
    message: 'User authentication successful',
    details: 'IP: 192.168.1.105'
  },
  {
    id: 'log-2',
    timestamp: '2025-05-11 22:15:43',
    level: 'warning',
    source: 'Encryption',
    message: 'Weak encryption key detected',
    details: 'Key strength below recommended threshold'
  },
  {
    id: 'log-3',
    timestamp: '2025-05-11 14:02:37',
    level: 'error',
    source: 'Database',
    message: 'Connection timeout',
    details: 'Unable to establish connection to primary database server'
  },
  {
    id: 'log-4',
    timestamp: '2025-05-10 19:22:56',
    level: 'info',
    source: 'Vault',
    message: 'New credential added to vault',
    details: 'Type: API key'
  },
  {
    id: 'log-5',
    timestamp: '2025-05-10 10:11:05',
    level: 'warning',
    source: 'Security',
    message: 'Multiple failed login attempts',
    details: 'IP: 203.0.113.45, Attempts: 5'
  },
  {
    id: 'log-6',
    timestamp: '2025-05-09 16:48:22',
    level: 'info',
    source: 'Files',
    message: 'File encryption completed',
    details: 'financial_report_2025.xlsx (1.4 MB)'
  },
  {
    id: 'log-7',
    timestamp: '2025-05-09 09:03:14',
    level: 'error',
    source: 'Encryption',
    message: 'Decryption failed',
    details: 'Corrupted encryption key or file data'
  }
];

const Logs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [logs, setLogs] = useState<LogEntry[]>(mockLogsData);
  
  const filteredLogs = logs.filter(log => 
    log.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.details?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getLevelBadge = (level: string) => {
    switch(level) {
      case 'info':
        return <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs">Info</span>;
      case 'warning':
        return <span className="px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs">Warning</span>;
      case 'error':
        return <span className="px-2 py-1 rounded-full bg-red-500/20 text-red-400 text-xs">Error</span>;
      default:
        return null;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-2xl font-medium mb-2">System Logs</h1>
          <p className="text-vault-muted">View and manage system activity logs</p>
        </div>
        
        <div className="mt-4 md:mt-0 flex space-x-2">
          <div className="relative w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-vault-muted" />
            <Input
              placeholder="Search logs..."
              className="pl-10 border-white/10 bg-white/5 focus:border-vault-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Button variant="outline" className="border-white/10 text-vault-muted hover:text-white hover:bg-purple-300/20 bg-white/5">
            <Filter size={16} className="mr-2" />
            Filter
          </Button>
        </div>
      </div>
      
      <div className="glass-card p-4 rounded-lg border border-white/10">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-transparent">
              <TableHead className="text-vault-muted">Timestamp</TableHead>
              <TableHead className="text-vault-muted">Level</TableHead>
              <TableHead className="text-vault-muted">Source</TableHead>
              <TableHead className="text-vault-muted">Message</TableHead>
              <TableHead className="text-vault-muted">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLogs.map((log) => (
              <TableRow key={log.id} className="border-white/10 hover:bg-white/5">
                <TableCell className="font-mono text-sm">{log.timestamp}</TableCell>
                <TableCell>{getLevelBadge(log.level)}</TableCell>
                <TableCell>{log.source}</TableCell>
                <TableCell>{log.message}</TableCell>
                <TableCell className="text-vault-muted text-sm">{log.details}</TableCell>
              </TableRow>
            ))}
            {filteredLogs.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6 text-vault-muted">
                  No log entries found matching your search
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Logs;
