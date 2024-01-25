import React from 'react';

interface IProps {
    classNames?: string;
}

const SupportIcon = ({ classNames }: IProps) => {
    return (
        <svg className={`${classNames ? classNames : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="14" height="14" rx="3" fill="#CD48C0" />
            <path
                d="M12.0541 4.875H12.3784C12.6798 4.875 12.8305 4.875 12.9558 4.89902C13.4704 4.99765 13.8727 5.38528 13.9751 5.88114C14 6.00189 14 6.14709 14 6.4375C14 6.72791 14 6.87312 13.9751 6.99387C13.8727 7.48975 13.4704 7.87738 12.9558 7.976C12.8305 8 12.6798 8 12.3784 8H12.0541M2 13H13.6757M7.83784 11.125C6.9333 11.125 6.481 11.125 6.10774 11.0387C4.92186 10.7643 3.99594 9.87219 3.71123 8.7295C3.62162 8.36987 3.62162 7.93406 3.62162 7.0625V5C3.62162 4.29994 3.62162 3.9499 3.76302 3.68251C3.88739 3.44731 4.08585 3.25609 4.32996 3.13624C4.60746 3 4.97074 3 5.6973 3H9.97838C10.7049 3 11.0682 3 11.3457 3.13624C11.5898 3.25608 11.7883 3.44731 11.9126 3.68251C12.0541 3.9499 12.0541 4.29993 12.0541 5V7.0625C12.0541 7.93406 12.0541 8.36987 11.9645 8.7295C11.6797 9.87219 10.7538 10.7643 9.56791 11.0387C9.19468 11.125 8.74238 11.125 7.83784 11.125Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default SupportIcon;
