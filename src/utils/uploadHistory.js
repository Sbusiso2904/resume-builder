export const saveUploadHistory = (userEmail, fileName, analysis) => {
  const uploadHistory = JSON.parse(localStorage.getItem('uploadHistory') || '{}');
  const userHistory = uploadHistory[userEmail] || [];
  
  userHistory.unshift({
    fileName,
    uploadDate: new Date().toISOString(),
    analysis,
    id: Date.now().toString()
  });
  
  // Keep only last 10 uploads
  uploadHistory[userEmail] = userHistory.slice(0, 10);
  localStorage.setItem('uploadHistory', JSON.stringify(uploadHistory));
};

export const getUploadHistory = (userEmail) => {
  const uploadHistory = JSON.parse(localStorage.getItem('uploadHistory') || '{}');
  return uploadHistory[userEmail] || [];
};

export const deleteUploadHistory = (userEmail, uploadId) => {
  const uploadHistory = JSON.parse(localStorage.getItem('uploadHistory') || '{}');
  const userHistory = uploadHistory[userEmail] || [];
  
  uploadHistory[userEmail] = userHistory.filter(upload => upload.id !== uploadId);
  localStorage.setItem('uploadHistory', JSON.stringify(uploadHistory));
};