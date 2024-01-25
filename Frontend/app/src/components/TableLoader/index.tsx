import Loader from '@components/Loader';
import React, { FC } from 'react';

interface TableLoaderProps {
    width?: number;
    height?: number;
    className?: string;
}

const TableLoader: FC<TableLoaderProps> = ({ width, height, className }) => {
    return (
        <tr className={`${className} !absolute inset-0 flex !w-full items-center justify-center`}>
            <td>
                <Loader height={height ? height : '30'} width={width ? width : '30'} />
            </td>
        </tr>
    );
};

export default TableLoader;
