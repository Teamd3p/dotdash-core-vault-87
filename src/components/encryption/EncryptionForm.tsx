
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Upload } from 'lucide-react';

const EncryptionForm = () => {
  const [title, setTitle] = useState('');
  const [customTitle, setCustomTitle] = useState('');
  const [password, setPassword] = useState('');
  const [tags, setTags] = useState('');
  const [notes, setNotes] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalTitle = title === 'custom' ? customTitle : title;
    
    if (!finalTitle || !selectedFile || !password) {
      toast({
        title: "Error",
        description: "Title, file, and password are required",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulating encryption process
    setTimeout(() => {
      toast({
        title: "Success",
        description: "File encrypted and stored successfully",
      });
      
      // Reset form
      setTitle('');
      setCustomTitle('');
      setPassword('');
      setTags('');
      setNotes('');
      setExpiryDate('');
      setSelectedFile(null);
      setIsLoading(false);
      
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, 1000);
  };

  return (
    <Card className="border-white/10 bg-sidebar">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Encrypt New File</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Select value={title} onValueChange={setTitle}>
              <SelectTrigger id="title" className="bg-vault/50 text-white [&>span]:text-white placeholder:text-white">
                <SelectValue placeholder="Select or create a title" />
              </SelectTrigger>
              <SelectContent className="[&_[data-radix-select-item]]:hover:bg-transparent">
                <SelectItem value="personal">Personal Credentials</SelectItem>
                <SelectItem value="work">Work Login</SelectItem>
                <SelectItem value="finance">Financial Details</SelectItem>
                <SelectItem value="tax">Tax Documents</SelectItem>
                <SelectItem value="medical">Medical Records</SelectItem>
                <SelectItem value="custom">Create Custom...</SelectItem>
              </SelectContent>
            </Select>
            {title === 'custom' && (
              <Input 
                className="mt-2 bg-vault/50" 
                placeholder="Enter custom title" 
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
              />
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="file">File to Encrypt</Label>
            <div className="flex flex-col items-center justify-center bg-vault/50 border border-dashed border-vault-muted rounded-md p-6">
              {selectedFile ? (
                <div className="text-center">
                  <p className="text-sm font-medium">{selectedFile.name}</p>
                  <p className="text-xs text-vault-muted mt-1">
                    {(selectedFile.size / 1024).toFixed(2)} KB
                  </p>
                  <Button 
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedFile(null)}
                    className="mt-2 text-xs"
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <>
                  <Upload className="h-10 w-10 text-vault-muted mb-2" />
                  <p className="text-sm text-white mb-2">Click to upload or drag and drop</p>
                  <Button 
                    type="button"
                    variant="outline"
                    size="sm"
                    className="bg-purple-300 hover:bg-purple-400 text-purple-950"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Select File
                  </Button>
                </>
              )}
              <input
                ref={fileInputRef}
                id="file"
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Encryption Password</Label>
            <Input 
              id="password" 
              type="password" 
              className="bg-vault/50"
              placeholder="Enter strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tags" className="text-sm text-vault-muted">Tags (optional)</Label>
            <Input 
              id="tags" 
              className="bg-vault/50"
              placeholder="Enter tags separated by commas"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm text-vault-muted">Notes (optional)</Label>
            <Textarea 
              id="notes" 
              className="min-h-20 bg-vault/50"
              placeholder="Enter additional notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="expiry" className="text-sm text-vault-muted">Expiry Date (optional)</Label>
            <Input 
              id="expiry" 
              type="date"
              className="bg-vault/50"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit"
            className="ml-auto bg-purple-300 hover:bg-purple-400 text-purple-950" 
            disabled={isLoading || !title || !selectedFile || !password}
          >
            {isLoading ? 'Encrypting...' : 'Encrypt and Store'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default EncryptionForm;
