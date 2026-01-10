"use client"

import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const MobileResume = () => {
    const file = "/files/resume.pdf" // Correct path matching desktop
    const [fileSource, setFileSource] = useState<string | null>(null);
    const [width, setWidth] = useState(300);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetch(file)
            .then((res) => res.blob())
            .then((blob) => {
                const blobUrl = URL.createObjectURL(blob);
                setFileSource(blobUrl);
            })
            .catch((err) => console.error("Error fetching PDF:", err));

        return () => {
            if (fileSource) URL.revokeObjectURL(fileSource);
        };
    }, [file]);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.clientWidth);
        }

        const handleResize = () => {
            if (containerRef.current) {
                setWidth(containerRef.current.clientWidth);
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div ref={containerRef} className="w-full h-full overflow-auto bg-gray-100 dark:bg-neutral-900 pb-20">
            {fileSource ? (
                <Document
                    file={fileSource}
                    loading={<div className="flex items-center justify-center p-10 text-gray-500">Loading PDF...</div>}
                    error={<div className="flex items-center justify-center p-10 text-red-500">Failed to load resume.</div>}
                    className="flex flex-col items-center"
                >
                    <Page
                        pageNumber={1}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        width={width}
                    />
                </Document>
            ) : (
                <div className="p-10 text-center text-gray-500">Preparing document...</div>
            )}
        </div>
    );
}

export default MobileResume
