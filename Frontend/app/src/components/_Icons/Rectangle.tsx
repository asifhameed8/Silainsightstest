import React from 'react';

interface IProps {
    classNames?: string;
}

const Rectangle = ({ classNames }: IProps) => {
    return (
        <svg
            className={` ${classNames ? classNames : ''}`}
            width="31"
            height="152"
            viewBox="0 0 31 152"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M31 0L2.10599 31.4831C0.751511 32.9589 0 34.8892 0 36.8924V115.108C0 117.111 0.751512 119.041 2.10599 120.517L31 152V0Z"
                fill="#32A7F4"
            />
        </svg>
    );
};

export default Rectangle;
