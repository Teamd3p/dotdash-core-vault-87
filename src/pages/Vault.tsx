
import React from 'react';
import VaultTable from '@/components/vault/VaultTable';

const Vault = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-medium mb-2">Vault</h1>
        <p className="text-vault-muted">Manage your secured data and encrypted items</p>
      </div>
      
      <VaultTable />
    </div>
  );
};

export default Vault;
