import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';


// Important: you need to include the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PreviewerComponent = ({ fileUrl, fileType }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  if (fileType === 'image') {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <img src={fileUrl} alt="Resume" className="w-full h-auto" />
      </div>
    );
  } else if (fileType === 'pdf') {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          className="w-full"
        >
          <Page 
            pageNumber={pageNumber} 
            className="w-full"
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
        <div className="mt-4 text-center">
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button 
            onClick={() => setPageNumber(pageNumber - 1)} 
            disabled={pageNumber <= 1}
            className="px-4 py-2 mr-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Previous
          </button>
          <button 
            onClick={() => setPageNumber(pageNumber + 1)} 
            disabled={pageNumber >= numPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  return <div>Unsupported file type</div>;
};

export default PreviewerComponent;