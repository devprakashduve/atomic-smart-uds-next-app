import React from 'react';
import { UserProfileCardProps } from './UserProfileCardProps.interface';
import './UserProfileCard.css';

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  name,
  avatarUrl,
  bio,
  email,
  phone,
  website,
}) => {
  return (
    <div className="user-profile-card w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
      <div className="flex items-center space-x-4">
        <img
          className="h-16 w-16 rounded-full"
          src={avatarUrl}
          alt={`${name}'s avatar`}
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{bio}</p>
        </div>
      </div>

      <div className="mt-4 text-gray-700">
        <p className="text-sm">
          <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
        </p>
        {phone && (
          <p className="text-sm">
            <strong>Phone:</strong> {phone}
          </p>
        )}
        {website && (
          <p className="text-sm">
            <strong>Website:</strong>{' '}
            <a href={website} target="_blank" rel="noopener noreferrer">
              {website}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;
