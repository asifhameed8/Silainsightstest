import { Button } from '@components/Button';
import MediaComponent from '@components/MediaComponent';
import ModalTopBar from '@modals/ModalTopBar';
import { isVideo } from '@utils/functions';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import useTranslation from 'next-translate/useTranslation';
interface IProps {
    uploadedAllFiles: Array<File>;
    deleteMedia: Function;
    editMedia: Function;
    setShow: any;
}

const EditAllImages = ({ uploadedAllFiles, deleteMedia, editMedia, setShow }: IProps) => {
    const { t } = useTranslation('common');
    return (
        <div className="w-full overflow-hidden rounded-md border border-lightBorder dark:border-borderColor sm:w-[38.125rem] md:w-[45.125rem] lg:w-[49.125rem]">
            <ModalTopBar className="!rounded-t-md" icon="icon-chatedit">
                {t('feeds.allmedia')}
            </ModalTopBar>
            <div className="AtScrollHide grid max-h-[80vh] grid-cols-2 gap-2 overflow-auto p-3 sm:grid-cols-3">
                {uploadedAllFiles?.map((file: File, index) => (
                    <div className="relative" key={index}>
                        <IoMdClose
                            onClick={() => deleteMedia(index)}
                            className="absolute right-2 top-2 z-20 h-6 w-6 cursor-pointer rounded-full bg-gray-800 p-0.5 text-chinesesilver hover:text-secondary"
                            aria-hidden="true"
                        />
                        <MediaComponent
                            width={500}
                            height={500}
                            dimensions="aspect-w-5 aspect-h-3"
                            filePath={file?.url ? file?.url : URL.createObjectURL(file)}
                            type={file.type?.split('/')[1]}
                        />
                        {!isVideo(file) && (
                            <Button onClick={() => editMedia(index)} className="absolute right-2 bottom-2">
                                {t('buttons.edit')}
                            </Button>
                        )}
                    </div>
                ))}
            </div>
            <div className={`flex items-center justify-end gap-3 border-lightBorder bg-lightBg px-5 py-3  dark:border-borderColor dark:bg-gray17`}>
                {/* <div className="flex items-center gap-2">
                    <i className="icon-scedulepost text-primary"></i>
                    <p className="mt-0.5 text-primary">Add Media</p>
                </div> */}
                <Button onClick={() => setShow(false)}> {t('buttons.done')}</Button>
            </div>
        </div>
    );
};

export default EditAllImages;
