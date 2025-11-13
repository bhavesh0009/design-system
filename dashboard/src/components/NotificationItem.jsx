import React from 'react';
import Avatar from './Avatar';
import Button from './Button';
import { Check, X, MoreVertical } from 'lucide-react';

const NotificationItem = ({
  avatar,
  message,
  timestamp,
  hasActions = false,
  onAccept,
  onDeny
}) => {
  return (
    <div className="flex items-center gap-3 p-4 rounded-md hover:bg-neutral-gray-100 transition-colors">
      <Avatar {...avatar} size="md" />

      <div className="flex-1 min-w-0">
        <p className="text-body-sm text-neutral-black">{message}</p>
        <p className="text-caption text-neutral-gray-500 mt-1">{timestamp}</p>
      </div>

      {hasActions ? (
        <div className="flex items-center gap-2">
          <Button
            variant="success"
            size="sm"
            icon={<Check className="w-4 h-4" />}
            onClick={onAccept}
          >
            Accept
          </Button>
          <Button
            variant="destructive"
            size="sm"
            icon={<X className="w-4 h-4" />}
            onClick={onDeny}
          >
            Deny
          </Button>
        </div>
      ) : (
        <button className="p-2 hover:bg-neutral-gray-100 rounded-lg transition-colors">
          <MoreVertical className="w-4 h-4 text-neutral-gray-700" />
        </button>
      )}
    </div>
  );
};

export default NotificationItem;
