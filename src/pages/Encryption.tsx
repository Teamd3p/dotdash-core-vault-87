
import React from 'react';
import EncryptionForm from '@/components/encryption/EncryptionForm';

const Encryption = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium mb-2">Encryption</h1>
      <p className="text-vault-muted">Encrypt your sensitive files and store them securely</p>
      
      <EncryptionForm />
    </div>
  );
};

export default Encryption;
