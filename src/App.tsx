
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Vault from "./pages/Vault";
import Encryption from "./pages/Encryption";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Files from "./pages/Files";
import Logs from "./pages/Logs";

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              
              <Route path="/" element={<AppLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/home" element={<Home />} />
                <Route path="/vault" element={<Vault />} />
                <Route path="/encryption" element={<Encryption />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/files" element={<Files />} />
                <Route path="/logs" element={<Logs />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
