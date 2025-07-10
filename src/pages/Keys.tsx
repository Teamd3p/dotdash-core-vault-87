
import React from 'react';
import KeysManagement from '@/components/keys/KeysManagement';

const Keys = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium mb-2">Key Management</h1>
      <p className="text-vault-muted">Generate, manage, and export security keys</p>
      
      <KeysManagement />
    </div>
  );
};

export default Keys;
