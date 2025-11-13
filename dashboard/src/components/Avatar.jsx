import React from 'react';

const Avatar = ({
  src,
  alt = 'User',
  size = 'md',
  initials,
  className = ''
}) => {
  const sizes = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-20 h-20 text-xl',
  };

  return (
    <div className={`${sizes[size]} rounded-full overflow-hidden flex items-center justify-center bg-purple text-white font-semibold border-2 border-white ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span>{initials || alt.slice(0, 2).toUpperCase()}</span>
      )}
    </div>
  );
};

export const AvatarStack = ({ avatars = [], maxVisible = 5 }) => {
  const visibleAvatars = avatars.slice(0, maxVisible);
  const remainingCount = avatars.length - maxVisible;

  return (
    <div className="flex items-center">
      {visibleAvatars.map((avatar, index) => (
        <div key={index} className="-ml-2 first:ml-0" style={{ zIndex: maxVisible - index }}>
          <Avatar {...avatar} size="sm" />
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="-ml-2 w-8 h-8 rounded-full bg-neutral-gray-300 text-neutral-gray-700 flex items-center justify-center text-xs font-semibold border-2 border-white">
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export default Avatar;
