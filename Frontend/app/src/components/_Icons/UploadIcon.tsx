import React from 'react';

interface IProps {
    classNames?: string;
}

const UploadIcon = ({ classNames }: IProps) => {
    return (
        <svg className={`${classNames ? classNames : ''}`} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.166 9.16663C14.9892 9.16663 14.8196 9.23686 14.6946 9.36189C14.5696 9.48691 14.4993 9.65648 14.4993 9.83329V12.642C14.4988 13.1346 14.3029 13.6069 13.9546 13.9552C13.6062 14.3035 13.134 14.4994 12.6413 14.5H4.35735C3.86474 14.4994 3.39246 14.3035 3.04413 13.9552C2.6958 13.6069 2.49988 13.1346 2.49935 12.642V9.83329C2.49935 9.65648 2.42911 9.48691 2.30409 9.36189C2.17906 9.23686 2.00949 9.16663 1.83268 9.16663C1.65587 9.16663 1.4863 9.23686 1.36128 9.36189C1.23625 9.48691 1.16602 9.65648 1.16602 9.83329V12.642C1.1669 13.4881 1.50341 14.2993 2.10171 14.8976C2.70001 15.4959 3.51123 15.8324 4.35735 15.8333H12.6413C13.4875 15.8324 14.2987 15.4959 14.897 14.8976C15.4953 14.2993 15.8318 13.4881 15.8327 12.642V9.83329C15.8327 9.65648 15.7624 9.48691 15.6374 9.36189C15.5124 9.23686 15.3428 9.16663 15.166 9.16663Z"
                fill="#32A7F4"
            />
            <path
                d="M4.9716 6.30461L7.8336 3.44261V11.8333C7.8336 12.0101 7.90384 12.1797 8.02887 12.3047C8.15389 12.4297 8.32346 12.4999 8.50027 12.4999C8.67708 12.4999 8.84665 12.4297 8.97168 12.3047C9.0967 12.1797 9.16694 12.0101 9.16694 11.8333V3.44261L12.0289 6.30461C12.1547 6.42604 12.3231 6.49324 12.4979 6.49172C12.6727 6.4902 12.8399 6.42009 12.9635 6.29648C13.0871 6.17288 13.1572 6.00567 13.1587 5.83087C13.1602 5.65608 13.093 5.48767 12.9716 5.36194L8.9716 1.36194C8.84659 1.23696 8.67705 1.16675 8.50027 1.16675C8.3235 1.16675 8.15396 1.23696 8.02894 1.36194L4.02894 5.36194C3.9075 5.48767 3.8403 5.65608 3.84182 5.83087C3.84334 6.00567 3.91345 6.17288 4.03706 6.29648C4.16066 6.42009 4.32787 6.4902 4.50267 6.49172C4.67747 6.49324 4.84587 6.42604 4.9716 6.30461Z"
                fill="#32A7F4"
            />
        </svg>
    );
};

export default UploadIcon;