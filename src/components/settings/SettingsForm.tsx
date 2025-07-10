
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const SettingsForm = () => {
  const [settings, setSettings] = useState({
    backupFrequency: 'daily',
    encryptionAlgorithm: 'aes-256-gcm',
    hmacEnabled: true,
    integrityMonitoring: true,
    securityPin: '',
    twoFactor: true,
    autoLogout: '30',
  });
  
  const handleChange = (name: string, value: string | boolean) => {
    setSettings((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSave = () => {
    toast.success('Settings saved successfully');
  };
  
  return (
    <div className="glass-card p-6 space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-6">Security Settings</h3>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-vault-muted">Backup Frequency</label>
              <Select 
                value={settings.backupFrequency} 
                onValueChange={(value) => handleChange('backupFrequency', value)}
              >
                <SelectTrigger className="border-white/10 bg-white/5">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-vault-muted">Encryption Algorithm</label>
              <Select 
                value={settings.encryptionAlgorithm} 
                onValueChange={(value) => handleChange('encryptionAlgorithm', value)}
              >
                <SelectTrigger className="border-white/10 bg-white/5">
                  <SelectValue placeholder="Select algorithm" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aes-256-gcm">AES-256-GCM</SelectItem>
                  <SelectItem value="aes-256-cbc">AES-256-CBC</SelectItem>
                  <SelectItem value="chacha20-poly1305">ChaCha20-Poly1305</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-vault-muted">Auto Logout (minutes)</label>
              <Input 
                type="number" 
                value={settings.autoLogout}
                onChange={(e) => handleChange('autoLogout', e.target.value)}
                className="border-white/10 bg-white/5"
                min="1"
                max="120"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-vault-muted">Security PIN</label>
              <Input 
                type="password" 
                value={settings.securityPin}
                onChange={(e) => handleChange('securityPin', e.target.value)}
                className="border-white/10 bg-white/5"
                placeholder="Enter 6-digit PIN"
                maxLength={6}
              />
            </div>
          </div>
          
          <div className="space-y-4 pt-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">HMAC Verification</p>
                <p className="text-xs text-vault-muted">Enable HMAC for data integrity verification</p>
              </div>
              <Switch 
                checked={settings.hmacEnabled}
                onCheckedChange={(checked) => handleChange('hmacEnabled', checked)}
                className="data-[state=checked]:bg-vault-accent"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Integrity Monitoring</p>
                <p className="text-xs text-vault-muted">Monitor file and key integrity in real-time</p>
              </div>
              <Switch 
                checked={settings.integrityMonitoring}
                onCheckedChange={(checked) => handleChange('integrityMonitoring', checked)}
                className="data-[state=checked]:bg-vault-accent"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm">Two Factor Authentication</p>
                <p className="text-xs text-vault-muted">Require 2FA for all login attempts</p>
              </div>
              <Switch 
                checked={settings.twoFactor}
                onCheckedChange={(checked) => handleChange('twoFactor', checked)}
                className="data-[state=checked]:bg-vault-accent"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end pt-4 border-t border-white/10">
        <Button variant="outline" className="mr-2 border-white/10 text-vault-muted hover:text-white bg-white/5">
          Reset to Defaults
        </Button>
        <Button className="bg-vault-accent hover:bg-vault-accent/80" onClick={handleSave}>
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default SettingsForm;
