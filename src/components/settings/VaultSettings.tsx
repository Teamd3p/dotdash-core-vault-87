
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
import { Pencil, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock data for vaults
const mockVaults = [
  { id: 1, name: 'Personal', itemCount: 12, lastModified: '2023-05-10T14:30:00' },
  { id: 2, name: 'Work', itemCount: 8, lastModified: '2023-05-08T10:45:00' },
  { id: 3, name: 'Finance', itemCount: 5, lastModified: '2023-05-06T09:10:00' },
];

const VaultSettings = () => {
  const { toast } = useToast();
  
  const handleRename = (id: number, newName: string) => {
    toast({
      title: "Vault renamed",
      description: `Vault has been renamed to ${newName}`
    });
  };
  
  const handleDelete = (id: number) => {
    toast({
      title: "Vault deleted",
      description: "Vault and all its contents have been permanently deleted."
    });
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(date);
  };

  return (
    <div className="space-y-6">
      <Card className="border-white/10 bg-sidebar">
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium mb-4">Vault Management</h3>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockVaults.map((vault) => (
                <TableRow key={vault.id}>
                  <TableCell>{vault.name}</TableCell>
                  <TableCell>{vault.itemCount}</TableCell>
                  <TableCell>{formatDate(vault.lastModified)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline">
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Rename Vault</DialogTitle>
                          </DialogHeader>
                          <div className="py-4">
                            <Label htmlFor={`rename-${vault.id}`}>New Name</Label>
                            <Input 
                              id={`rename-${vault.id}`} 
                              className="bg-vault/50 mt-2"
                              defaultValue={vault.name}
                            />
                          </div>
                          <DialogFooter>
                            <Button onClick={() => handleRename(vault.id, `${vault.name} (Renamed)`)}>
                              Save Changes
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Delete Vault</DialogTitle>
                          </DialogHeader>
                          <div className="py-4">
                            <p className="text-vault-muted">
                              Are you sure you want to delete <span className="font-medium text-white">{vault.name}</span>? 
                              This action cannot be undone and will permanently delete all content in this vault.
                            </p>
                          </div>
                          <DialogFooter>
                            <Button variant="destructive" onClick={() => handleDelete(vault.id)}>
                              Delete Permanently
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default VaultSettings;
