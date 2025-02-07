import React from 'react';

interface ProfileCardProps {
  coverImage: string;
  profileImage: string;
  name: string;
  title: string;
}

export default function ProfileCard({
  coverImage,
  profileImage,
  name,
  title,
}: ProfileCardProps) {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      <img className="h-32 w-full object-cover" src={coverImage} alt="Cover" />
      <div className="-mt-10 flex justify-center">
        <img
          className="h-20 w-20 rounded-full border-4 border-white object-cover"
          src={profileImage}
          alt="Profile"
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
  );
}
