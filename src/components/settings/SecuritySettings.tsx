import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

// Mock data for active sessions
const mockSessions = [
  { id: 1, device: 'Chrome on Windows', lastActive: '2023-05-10T14:30:00', location: 'New York, USA' },
  { id: 2, device: 'Firefox on macOS', lastActive: '2023-05-09T12:15:00', location: 'San Francisco, USA' },
  { id: 3, device: 'Safari on iOS', lastActive: '2023-05-08T10:45:00', location: 'London, UK' },
];

const SecuritySettings = () => {
  const { toast } = useToast();
  
  const handleTwoFactorToggle = (enabled: boolean) => {
    toast({
      title: enabled ? "2FA Enabled" : "2FA Disabled",
      description: enabled 
        ? "Two-factor authentication has been enabled for your account."
        : "Two-factor authentication has been disabled for your account."
    });
  };
  
  const handleSessionTerminate = (sessionId: number) => {
    toast({
      title: "Session terminated",
      description: "The selected session has been successfully terminated."
    });
  };
  
  const handleDeleteAccount = () => {
    toast({
      title: "Account deletion requested",
      description: "Your account deletion request has been submitted."
    });
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      dateStyle: 'medium',
      timeStyle: 'short' 
    }).format(date);
  };

  return (
    <div className="space-y-6">
      <Card className="border-white/10 bg-sidebar">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
              <p className="text-vault-muted text-sm mt-1">
                Add an extra layer of security to your account
              </p>
            </div>
            <Switch onCheckedChange={handleTwoFactorToggle} />
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-white/10 bg-sidebar">
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium mb-4">Active Sessions</h3>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Device</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSessions.map((session) => (
                <TableRow key={session.id}>
                  <TableCell>{session.device}</TableCell>
                  <TableCell>{session.location}</TableCell>
                  <TableCell>{formatDate(session.lastActive)}</TableCell>
                  <TableCell className="text-right">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleSessionTerminate(session.id)}
                    >
                      Terminate
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card className="border-white/10 bg-sidebar">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-red-500">Delete Account</h3>
              <p className="text-vault-muted text-sm mt-1">
                Permanently delete your account and all associated data
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete Account</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-vault-muted mb-4">
                    Are you sure you want to delete your account? This action cannot be undone 
                    and all your vaults, encrypted data, and settings will be permanently deleted.
                  </p>
                  <Label className="flex items-center space-x-2">
                    <Input 
                      type="checkbox" 
                      className="w-4 h-4" 
                      id="confirm-delete"
                    />
                    <span>I understand that this action is irreversible</span>
                  </Label>
                </div>
                <DialogFooter>
                  <Button variant="destructive" onClick={handleDeleteAccount}>
                    Delete Permanently
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecuritySettings;
