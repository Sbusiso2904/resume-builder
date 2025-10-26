import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(selectedFile.type)) {
        setError('Please upload a PDF or Word document');
        return;
      }
      
      // Check file size (10MB max)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError('File size should be less than 5MB');
        return;
      }
      
      setFile(selectedFile);
      setError('');
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first');
      return;
    }

    setUploading(true);
    setError('');

    try {
      // Simulate file upload and analysis
      await simulateFileUpload(file);
      
      // Generate mock analysis (in real app, this would come from your backend)
      const mockAnalysis = generateMockAnalysis(file.name);
      setAnalysis(mockAnalysis);
      
      // Save to localStorage for persistence
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      const userUploads = JSON.parse(localStorage.getItem('userUploads') || '{}');
      
      userUploads[currentUser.email] = userUploads[currentUser.email] || [];
      userUploads[currentUser.email].push({
        fileName: file.name,
        uploadDate: new Date().toISOString(),
        analysis: mockAnalysis
      });
      
      localStorage.setItem('userUploads', JSON.stringify(userUploads));
      
    } catch (err) {
      setError('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const simulateFileUpload = (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  const generateMockAnalysis = (fileName) => {
    return {
      fileName,
      overallScore: Math.floor(Math.random() * 30) + 70, // 70-100
      suggestions: [
        {
          category: 'Formatting',
          issues: ['Inconsistent bullet points', 'Too many fonts used'],
          suggestions: ['Use consistent bullet style throughout', 'Stick to 1-2 professional fonts']
        },
        {
          category: 'Content',
          issues: ['Missing quantifiable achievements', 'Weak action verbs'],
          suggestions: ['Add metrics to show impact (e.g., "Increased sales by 25%")', 'Use stronger verbs like "developed", "managed", "implemented"']
        },
        {
          category: 'Structure',
          issues: ['Work experience not in reverse chronological order'],
          suggestions: ['List most recent job first', 'Use consistent date format']
        }
      ],
      strengths: [
        'Clear contact information',
        'Good section organization',
        'Relevant skills listed'
      ],
      areasForImprovement: [
        'Add more quantifiable achievements',
        'Include relevant certifications',
        'Optimize for ATS keywords'
      ]
    };
  };

  const handleUseBuilder = () => {
    navigate('/maindash/builder');
  };

  const handleUploadNew = () => {
    setFile(null);
    setAnalysis(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-900 mb-2">Improve Your Resume/CV</h1>
        <p className="text-gray-600 mb-8">
          Upload your resume and suggestions to make it stand out to employers.
        </p>

        {!analysis ? (
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-dashed border-gray-300">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Upload Your Resume
              </h3>
              <p className="text-gray-500 mb-6">
                Supported formats: PDF, DOC, DOCX (Max 10MB)
              </p>

              <div className="mb-6">
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
                >
                  Choose File
                </label>
                {file && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected: {file.name}
                  </p>
                )}
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}

              <button
                onClick={handleUpload}
                disabled={uploading || !file}
                className={`w-full max-w-xs mx-auto ${
                  uploading || !file
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700'
                } text-white px-6 py-3 rounded-lg font-semibold transition duration-200`}
              >
                {uploading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </span>
                ) : (
                  'Analyze Resume'
                )}
              </button>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-500 mb-4">Don't have a resume yet?</p>
                <button
                  onClick={handleUseBuilder}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-200"
                >
                  Create New Resume with Builder
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-green-900 mb-2">
                  Analysis Complete!
                </h2>
                <p className="text-gray-600">
                  Here are suggestions to improve your resume
                </p>
              </div>
              <button
                onClick={handleUploadNew}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold"
              >
                Upload New File
              </button>
            </div>

            {/* Overall Score */}
            <div className="bg-green-50 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Overall Resume Score
                  </h3>
                  <p className="text-gray-600">
                    Your resume scores {analysis.overallScore}/100
                  </p>
                </div>
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="3"
                      strokeDasharray={`${analysis.overallScore}, 100`}
                    />
                    <text x="18" y="20.5" textAnchor="middle" fill="#10B981" fontSize="8" fontWeight="bold">
                      {analysis.overallScore}%
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <div className="grid gap-6">
              {analysis.suggestions.map((category, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {category.category}
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-red-700 mb-2">Issues Found:</h5>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {category.issues.map((issue, i) => (
                          <li key={i}>{issue}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">Suggestions:</h5>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {category.suggestions.map((suggestion, i) => (
                          <li key={i}>{suggestion}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Strengths and Areas for Improvement */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">
                   Strengths
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {analysis.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">
                   Areas for Improvement
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {analysis.areasForImprovement.map((area, index) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handleUseBuilder}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
              >
                Implement Suggestions with Builder
              </button>
              <button
                onClick={handleUploadNew}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
              >
                Upload Another Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;