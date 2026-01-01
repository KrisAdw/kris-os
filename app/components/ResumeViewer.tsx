"use client"

import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface ResumeViewerProps {
    file: string;
}

const ResumeViewer = ({ file }: ResumeViewerProps) => {
    const [fileSource, setFileSource] = useState<string | null>(null);

    useEffect(() => {
        // Fetch file PDF sebagai blob supaya IDM nggak nyamber URL .pdf-nya
        fetch(file)
            .then((res) => res.blob())
            .then((blob) => {
                const blobUrl = URL.createObjectURL(blob);
                setFileSource(blobUrl);
            })
            .catch((err) => console.error("Error fetching PDF:", err));

        // Cleanup URL memory
        return () => {
            if (fileSource) URL.revokeObjectURL(fileSource);
        };
    }, [file]);

    return (
        <div id="resume-container" className="w-full h-full overflow-auto flex justify-center bg-gray-100 p-4">
            {fileSource ? (
                <Document
                    file={fileSource}
                    loading={<div className="flex items-center justify-center p-10">Loading PDF...</div>}
                    error={<div className="flex items-center justify-center p-10 text-red-500">Failed to load PDF file.</div>}
                    className="shadow-lg"
                >
                    <Page
                        pageNumber={1}
                        renderAnnotationLayer={true}
                        renderTextLayer={true}
                    />
                </Document>
            ) : (
                <div className="p-10">Preparing document...</div>
            )}
        </div>
    );
}

export default ResumeViewer;