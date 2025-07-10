
import React from 'react';
import ProfileSettings from '@/components/settings/ProfileSettings';
import VaultSettings from '@/components/settings/VaultSettings';
import SecuritySettings from '@/components/settings/SecuritySettings';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

const Settings = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-medium mb-2 text-gradient">Settings</h1>
        <p className="text-white/70">Configure your profile, vault, and security preferences</p>
      </div>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="bg-white/5 backdrop-blur-sm border border-white/10">
          <TabsTrigger value="profile" className="data-[state=active]:bg-primary/20 data-[state=active]:text-white text-white/70">Profile</TabsTrigger>
          <TabsTrigger value="vault" className="data-[state=active]:bg-primary/20 data-[state=active]:text-white text-white/70">Vault</TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-primary/20 data-[state=active]:text-white text-white/70">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <ProfileSettings />
          </motion.div>
        </TabsContent>
        
        <TabsContent value="vault" className="pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <VaultSettings />
          </motion.div>
        </TabsContent>
        
        <TabsContent value="security" className="pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <SecuritySettings />
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default Settings;
