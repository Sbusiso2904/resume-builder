import React from 'react';

const UploadHistory = ({ history, onDelete }) => {
  if (!history || history.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-500">No upload history yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {history.map((upload) => (
        <div key={upload.id} className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold text-gray-900">{upload.fileName}</h4>
              <p className="text-sm text-gray-500">
                Uploaded: {new Date(upload.uploadDate).toLocaleDateString()}
              </p>
              <p className="text-sm text-green-600 font-semibold">
                Score: {upload.analysis.overallScore}/100
              </p>
            </div>
            <button
              onClick={() => onDelete(upload.id)}
              className="text-red-600 hover:text-red-800 text-sm font-semibold"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UploadHistory;