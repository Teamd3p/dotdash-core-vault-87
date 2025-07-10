
import React from 'react';

type Activity = {
  id: string;
  action: string;
  user: string;
  time: string;
  details?: string;
};

type RecentActivityCardProps = {
  title: string;
  activities: Activity[];
};

const RecentActivityCard = ({ title, activities }: RecentActivityCardProps) => {
  return (
    <div className="glass-card p-6">
      <h3 className="text-sm font-medium text-vault-muted mb-4">{title}</h3>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 py-2 border-t border-white/5">
            <div className="w-2 h-2 mt-1.5 rounded-full bg-vault-accent animate-pulse-slow"></div>
            <div>
              <p className="text-sm font-medium">{activity.action}</p>
              <div className="flex text-xs text-vault-muted mt-1">
                <span>{activity.user}</span>
                <span className="mx-2">•</span>
                <span>{activity.time}</span>
              </div>
              {activity.details && (
                <p className="text-xs text-vault-muted mt-1">{activity.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-4 text-xs text-vault-accent hover:text-white transition-colors">
        View all activity
      </button>
    </div>
  );
};

export default RecentActivityCard;
