import React from 'react';
interface IProps {
    classNames?: string;
}
const LanguageIcon = ({ classNames }: IProps) => {
    return (
        <div>
            <svg
                className={`${classNames ? classNames : ''}`}
                width="25"
                height="23"
                viewBox="0 0 25 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.4886 15.0305L10.6023 12.144L10.6364 12.1095C12.5615 9.94417 13.9999 7.38214 14.8523 4.6H18.1818V2.3H10.2273V0H7.95455V2.3H0V4.6H12.6932C11.9318 6.808 10.7273 8.9125 9.09091 10.7525C8.03409 9.568 7.15909 8.2685 6.46591 6.9H4.19318C5.02273 8.7745 6.15909 10.5455 7.57955 12.144L1.79545 17.917L3.40909 19.55L9.09091 13.8L12.625 17.3765L13.4886 15.0305ZM19.8864 9.2H17.6136L12.5 23H14.7727L16.0455 19.55H21.4432L22.7273 23H25L19.8864 9.2ZM16.9091 17.25L18.75 12.2705L20.5909 17.25H16.9091Z"
                    fill="white"
                />
            </svg>
        </div>
    );
};

export default LanguageIcon;