import React from 'react';

interface IProps {
    classNames?: string;
}

const NoSchedule = ({ classNames }: IProps) => {
    return (
        <svg
            className={`${classNames ? classNames : ''}`}
            width="50"
            height="50"
            viewBox="0 0 126 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M66.7305 60.4316H72.4922C74.4014 60.4316 75.9492 58.8838 75.9492 56.9746C75.9492 55.0654 74.4014 53.5176 72.4922 53.5176H66.7305C64.8213 53.5176 63.2734 55.0654 63.2734 56.9746C63.2734 58.8838 64.8213 60.4316 66.7305 60.4316Z"
                fill="#727279"
            />
            <path
                d="M51.9805 53.5176H46.2188C44.3095 53.5176 42.7617 55.0654 42.7617 56.9746C42.7617 58.8838 44.3095 60.4316 46.2188 60.4316H51.9805C53.8897 60.4316 55.4375 58.8838 55.4375 56.9746C55.4375 55.0654 53.8897 53.5176 51.9805 53.5176Z"
                fill="#727279"
            />
            <path
                d="M87.2422 60.4316H93.0039C94.9131 60.4316 96.4609 58.8838 96.4609 56.9746C96.4609 55.0654 94.9131 53.5176 93.0039 53.5176H87.2422C85.333 53.5176 83.7852 55.0654 83.7852 56.9746C83.7852 58.8838 85.333 60.4316 87.2422 60.4316Z"
                fill="#727279"
            />
            <path
                d="M31.4688 69.0742H25.707C23.7978 69.0742 22.25 70.622 22.25 72.5312C22.25 74.4405 23.7978 75.9883 25.707 75.9883H31.4688C33.378 75.9883 34.9258 74.4405 34.9258 72.5312C34.9258 70.622 33.378 69.0742 31.4688 69.0742Z"
                fill="#727279"
            />
            <path
                d="M51.9805 69.0742H46.2188C44.3095 69.0742 42.7617 70.622 42.7617 72.5312C42.7617 74.4405 44.3095 75.9883 46.2188 75.9883H51.9805C53.8897 75.9883 55.4375 74.4405 55.4375 72.5312C55.4375 70.622 53.8897 69.0742 51.9805 69.0742Z"
                fill="#727279"
            />
            <path
                d="M75.9492 72.5312C75.9492 70.622 74.4014 69.0742 72.4922 69.0742H66.7305C64.8213 69.0742 63.2734 70.622 63.2734 72.5312C63.2734 74.4405 64.8213 75.9883 66.7305 75.9883H72.4922C74.4014 75.9883 75.9492 74.4405 75.9492 72.5312Z"
                fill="#727279"
            />
            <path
                d="M31.4688 84.6309H25.707C23.7978 84.6309 22.25 86.1787 22.25 88.0879C22.25 89.9971 23.7978 91.5449 25.707 91.5449H31.4688C33.378 91.5449 34.9258 89.9971 34.9258 88.0879C34.9258 86.1787 33.378 84.6309 31.4688 84.6309Z"
                fill="#727279"
            />
            <path
                d="M51.9805 84.6309H46.2188C44.3095 84.6309 42.7617 86.1787 42.7617 88.0879C42.7617 89.9971 44.3095 91.5449 46.2188 91.5449H51.9805C53.8897 91.5449 55.4375 89.9971 55.4375 88.0879C55.4375 86.1787 53.8897 84.6309 51.9805 84.6309Z"
                fill="#727279"
            />
            <path
                d="M111.211 72.3183V27.5898C111.211 20.6004 105.525 14.9141 98.5352 14.9141H91.8516V11.457C91.8516 9.54783 90.3037 8 88.3945 8C86.4853 8 84.9375 9.54783 84.9375 11.457V14.9141H72.4922V11.457C72.4922 9.54783 70.9444 8 69.0352 8C67.126 8 65.5781 9.54783 65.5781 11.457V14.9141H53.1328V11.457C53.1328 9.54783 51.585 8 49.6758 8C47.7666 8 46.2188 9.54783 46.2188 11.457V14.9141H33.7734V11.457C33.7734 9.54783 32.2256 8 30.3164 8C28.4072 8 26.8594 9.54783 26.8594 11.457V14.9141H20.1758C13.1864 14.9141 7.5 20.6004 7.5 27.5898V96.7305C7.5 102.449 12.1525 107.102 17.8711 107.102H69.6394C73.6883 118.119 84.2869 126 96.6914 126C112.576 126 125.5 113.076 125.5 97.1914C125.5 86.5979 119.751 77.3229 111.211 72.3183ZM14.4141 27.5898C14.4141 24.4128 16.9988 21.8281 20.1758 21.8281H26.8594V25.2852C26.8594 27.1944 28.4072 28.7422 30.3164 28.7422C32.2256 28.7422 33.7734 27.1944 33.7734 25.2852V21.8281H46.2188V25.2852C46.2188 27.1944 47.7666 28.7422 49.6758 28.7422C51.585 28.7422 53.1328 27.1944 53.1328 25.2852V21.8281H65.5781V25.2852C65.5781 27.1944 67.126 28.7422 69.0352 28.7422C70.9444 28.7422 72.4922 27.1944 72.4922 25.2852V21.8281H84.9375V25.2852C84.9375 27.1944 86.4853 28.7422 88.3945 28.7422C90.3037 28.7422 91.8516 27.1944 91.8516 25.2852V21.8281H98.5352C101.712 21.8281 104.297 24.4128 104.297 27.5898V37.9609H14.4141V27.5898ZM17.8711 100.188C15.9649 100.188 14.4141 98.6367 14.4141 96.7305V44.875H104.297V69.4038C101.873 68.7396 99.3231 68.3828 96.6914 68.3828C80.8064 68.3828 67.8828 81.3064 67.8828 97.1914C67.8828 98.2029 67.9358 99.2025 68.0382 100.188H17.8711ZM96.6914 119.086C84.6188 119.086 74.7969 109.264 74.7969 97.1914C74.7969 85.1188 84.6188 75.2969 96.6914 75.2969C108.764 75.2969 118.586 85.1188 118.586 97.1914C118.586 109.264 108.764 119.086 96.6914 119.086Z"
                fill="#727279"
            />
            <path
                d="M108.215 93.7344H100.148V85.668C100.148 83.7588 98.6006 82.2109 96.6914 82.2109C94.7822 82.2109 93.2344 83.7588 93.2344 85.668V97.1914C93.2344 99.1006 94.7822 100.648 96.6914 100.648H108.215C110.124 100.648 111.672 99.1006 111.672 97.1914C111.672 95.2822 110.124 93.7344 108.215 93.7344Z"
                fill="#727279"
            />
            <path
                d="M119.09 1.41021C117.209 -0.470071 114.165 -0.470071 112.284 1.41021L1.91021 111.784C0.0299287 113.663 0.0299287 116.711 1.91021 118.59C2.84883 119.53 4.08088 120 5.31294 120C6.54333 120 7.77705 119.53 8.71567 118.59L119.09 8.21566C120.97 6.33704 120.97 3.28883 119.09 1.41021Z"
                fill="#727279"
            />
        </svg>
    );
};

export default NoSchedule;
