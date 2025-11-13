import React from 'react';
import Avatar from './Avatar';
import { MessageCircle } from 'lucide-react';

const UserListItem = ({ avatar, name, role, onMessage }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg mb-3 hover:scale-[1.01] transition-transform cursor-pointer">
      <Avatar {...avatar} size="lg" />

      <div className="flex-1">
        <h4 className="text-base font-semibold text-neutral-black">{name}</h4>
        <p className="text-body-sm text-neutral-gray-700">{role}</p>
      </div>

      <button
        onClick={onMessage}
        className="p-2 bg-purple/10 text-purple rounded-lg hover:bg-purple/20 transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
      </button>
    </div>
  );
};

export default UserListItem;
