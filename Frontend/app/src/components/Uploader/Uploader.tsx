import { useEffect, useRef, useState } from 'react';
import Uppy, { UppyFile } from '@uppy/core';
import Dashboard from '@uppy/dashboard';
import XHRUpload from '@uppy/xhr-upload';
import ImageEditor from '@uppy/image-editor';

import DropTarget from '@uppy/drop-target';
import Compressor from '@uppy/compressor';
interface UploaderProps {
    setUploadedFiles: Function;
    onFileInput?: (file: File) => void;
}

//const MIN_VIDEO_DURATION = 30; // Minimum video duration in seconds
const MAX_VIDEO_DURATION = 60; // Maximum video duration in seconds

export const useUploader = ({ setUploadedFiles, onFileInput }: UploaderProps) => {
    const uppyRef = useRef<Uppy>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [files, setFiles] = useState<Blob[]>([]);

    useEffect(() => {
        uppyRef.current = new Uppy({
            meta: {
                upload_preset: process.env.NEXT_PUBLIC_YOUR_UNSIGNED_UPLOAD_PRESET,
                tags: 'browser_upload'
            },
            restrictions: { maxNumberOfFiles: 1 }
        })
            .use(Dashboard, {
                inline: false,
                target: 'body',
                showLinkToFileUploadResult: false,
                autoOpenFileEditor: true,
                hideCancelButton: true,
                closeAfterFinish: true
            })
            .use(XHRUpload, {
                endpoint: process.env.NEXT_PUBLIC_CLOUDINARY_URL || '',
                formData: true,
                fieldName: 'file',
                allowedMetaFields: ['file', 'name', 'upload_preset']
            })
            .use(ImageEditor, { target: Dashboard })
            .use(DropTarget, {
                target: document.body
            })
            .use(Compressor);

        uppyRef.current.on('file-added', (file: UppyFile) => {
            // Check if the file is a video and its duration
            // if (file.type.startsWith('video/') && file.extension === 'mp4') {
            //     try {
            //         await checkVideoDuration(file.data);
            //     } catch (error) {
            //         alert(error.message); // Handle the error accordingly
            //         uppyRef.current?.removeFile(file.id); // Remove the file from Uppy
            //         removeFile(file?.name);
            //         return; // Exit the callback
            //     }
            // }
            uppyRef.current?.setFileMeta(file.id, {
                upload_preset: process.env.NEXT_PUBLIC_YOUR_UNSIGNED_UPLOAD_PRESET
            });
            setFiles((prevFiles) => [...prevFiles, file.data as Blob]); // 2. Add file to notUploadedFiles state
        });

        uppyRef.current.on('upload-success', (file, response) => {
            const uploadedFileData = response.body;
            setUploadedFiles(uploadedFileData);
            setFiles((prevFiles) => prevFiles.filter((f) => f !== file?.data)); // 3. Remove uploaded file from notUploadedFiles state
        });

        return () => {
            uppyRef.current?.close();
        };
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
        uppyRef.current?.getPlugin('Dashboard')?.openModal();
    };

    const closeModal = () => {
        setIsModalOpen(false);
        uppyRef.current?.getPlugin('Dashboard')?.closeModal();
    };

    const addFile = (file: File) => {
        // Check if there are any existing files and remove them
        const existingFiles = uppyRef.current?.getFiles();
        if (existingFiles && existingFiles.length > 0) {
            existingFiles.forEach((existingFile) => {
                uppyRef.current?.removeFile(existingFile.id);
            });
        }

        uppyRef.current?.addFile({
            name: file.name,
            type: file.type,
            data: file
        });
        setFiles([file]);

        if (onFileInput) {
            onFileInput(file);
        }
    };

    const removeFile = (fileName: string) => {
        const file = uppyRef.current?.getFiles().find((f) => f.name === fileName);

        if (file) {
            uppyRef.current?.removeFile(file.id);
        }

        setFiles((prevFiles) => prevFiles.filter((f) => f.name !== fileName));
    };

    // Function to check video duration
    const checkVideoDuration = (file: File) => {
        return new Promise((resolve, reject) => {
            const video = document.createElement('video');
            video.preload = 'metadata';

            video.onloadedmetadata = () => {
                window.URL.revokeObjectURL(video.src);

                if (/* video.duration < MIN_VIDEO_DURATION ||  */ video.duration > MAX_VIDEO_DURATION) {
                    //reject(new Error(`Video must be between ${MIN_VIDEO_DURATION} and ${MAX_VIDEO_DURATION} seconds.`));
                    reject(new Error(`Video must be less then ${MAX_VIDEO_DURATION} seconds.`));
                } else {
                    resolve(true);
                }
            };

            video.onerror = () => {
                reject(new Error('Error loading video metadata'));
            };

            video.src = URL.createObjectURL(file);
        });
    };

    return { openModal, closeModal, isModalOpen, addFile, files, removeFile, checkVideoDuration };
};
