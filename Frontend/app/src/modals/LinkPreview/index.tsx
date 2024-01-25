import MediaComponent from '@components/MediaComponent';
import { IoMdClose } from 'react-icons/io';
import { memo } from 'react';
interface ILinkPreview {
    preview: {
        url?: string;
        title?: string;
        description?: string;
        imageUrl?: string;
    };
    setLinkPreview?: Function;
    setBackupLinkPreview?: Function;
}

const LinkPreview = ({ preview, setLinkPreview, setBackupLinkPreview }: ILinkPreview) => {
    const { title, description, imageUrl, url } = preview;

    return (
        <div className="relative">
            {setLinkPreview && setBackupLinkPreview && (
                <div
                    className="absolute right-2 top-2 z-20"
                    onClick={() => {
                        setBackupLinkPreview(preview);
                        setLinkPreview({});
                    }}
                >
                    <IoMdClose
                        className="h-6 w-6 cursor-pointer rounded-full bg-gray-800 p-0.5 text-chinesesilver hover:text-secondary"
                        aria-hidden="true"
                    />
                </div>
            )}
            <a href={url} target="_blank">
                <div className="relative w-full">
                    <div className="relative">
                        {imageUrl && <MediaComponent dimensions="aspect-w-2 aspect-h-1 rounded-b-none" filePath={imageUrl} />}
                        <div className={`${imageUrl ? 'rounded-b-md' : 'rounded-md'} flex bg-lightBg p-3 dark:bg-gray17`}>
                            <div>
                                <p className="text-black dark:text-white">{title}</p>
                                <p className="">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default memo(LinkPreview);
