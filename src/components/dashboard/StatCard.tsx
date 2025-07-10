
import React from 'react';

type StatCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
  trend?: {
    value: string;
    positive: boolean;
  };
}

const StatCard = ({ title, value, icon, description, trend }: StatCardProps) => {
  return (
    <div className="glass-card p-6 relative overflow-hidden">
      <div className="flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-vault-muted mb-2">{title}</h3>
          <p className="text-2xl font-medium">{value}</p>
          
          {trend && (
            <div className="flex items-center mt-2 text-xs">
              <span className={trend.positive ? 'text-green-500' : 'text-red-500'}>
                {trend.positive ? '↑' : '↓'} {trend.value}
              </span>
              <span className="text-vault-muted ml-1">vs last month</span>
            </div>
          )}
        </div>
        
        <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      {description && (
        <p className="mt-4 text-xs text-vault-muted">{description}</p>
      )}
    </div>
  );
};

export default StatCard;
