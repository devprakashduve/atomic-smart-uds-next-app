import React, { useState } from 'react';
import { FileUploaderProps } from './FileUploaderProps.interface';
import './FileUploader.css';

const FileUploader: React.FC<FileUploaderProps> = ({
  onFileChange,
  label,
  acceptedFileTypes = [],
  maxFileSize = Infinity,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const file = files[0];

    // Check file type
    if (
      acceptedFileTypes.length > 0 &&
      !acceptedFileTypes.includes(file.type)
    ) {
      setError('Invalid file type');
      onFileChange(null); // Clear the selected file
      return;
    }

    // Check file size
    if (file.size > maxFileSize) {
      setError('File is too large');
      onFileChange(null); // Clear the selected file
      return;
    }

    // If no errors, clear the error message and pass the file
    setError(null);
    onFileChange(files);
  };

  return (
    <div className="file-uploader space-y-4">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FileUploader;
