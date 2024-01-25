import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import { useEffect, useRef, useState } from 'react';

const UppyFileInput = () => {
    const uppy = useRef();
    const [isDashboardVisible, setIsDashboardVisible] = useState(false);

    useEffect(() => {
        uppy.current = new Uppy({
            meta: { type: 'avatar' },
            restrictions: { maxNumberOfFiles: 1 },
            autoProceed: true
        });

        // Add your desired Uppy plugins here

        return () => {
            if (uppy.current) {
                uppy.current.close();
            }
        };
    }, []);

    // if (!uppy.current) {
    //     return null;
    // }

    const handleFileInput = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            setIsDashboardVisible(true);
            Array.from(files).forEach((file) => uppy.current.addFile({ name: file.name, type: file.type, data: file }));
        }
    };

    // const handleButtonClick = () => {
    //     document.getElementById('fileInput').click();
    // };

    return (
        <>
            <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileInput} />

            {isDashboardVisible && <Dashboard uppy={uppy.current} />}
        </>
    );
};

export default UppyFileInput;
