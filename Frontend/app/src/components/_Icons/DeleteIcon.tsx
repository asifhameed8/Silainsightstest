import React from 'react';

interface IProps {
    classNames?: string;
}

const DeleteIcon = ({ classNames }: IProps) => {
    return (
        <svg className={`${classNames ? classNames : ''}`} width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.53743 5.89957C1.48757 6.55057 0 8.47014 0 10.7347V10.7857C0 11.7324 0.767571 12.5 1.71429 12.5H8.63272C8.90357 12.5 9.16329 12.3924 9.35443 12.2009C9.45129 12.104 9.52671 11.9896 9.57771 11.8653C10.9526 11.6296 12 10.4309 12 8.98957C12 7.379 10.6924 6.07143 9.08186 6.07143C8.59029 6.07143 8.12657 6.19357 7.71943 6.40914C7.37357 6.19657 7.00029 6.02471 6.60643 5.89957C7.43657 5.38486 7.98986 4.46557 7.98986 3.41814C7.98986 1.80757 6.68229 0.5 5.07171 0.5C3.46157 0.5 2.154 1.80757 2.154 3.41814C2.154 4.46557 2.70729 5.38486 3.53743 5.89957ZM6.97371 6.97314C6.402 6.68343 5.75571 6.52014 5.07171 6.52014C2.74586 6.52014 0.857143 8.40886 0.857143 10.7347V10.7857C0.857143 11.2593 1.24071 11.6429 1.71429 11.6429H7.86729C6.86271 11.1817 6.16414 10.1664 6.16414 8.98957C6.16414 8.20786 6.47229 7.49729 6.97371 6.97314ZM9.08186 6.92857C10.2193 6.92857 11.1429 7.85214 11.1429 8.98957C11.1429 10.1266 10.2193 11.0501 9.08186 11.0501C7.94486 11.0501 7.02129 10.1266 7.02129 8.98957C7.02129 7.85214 7.94486 6.92857 9.08186 6.92857ZM5.07171 1.35714C6.20914 1.35714 7.13272 2.28071 7.13272 3.41814C7.13272 4.55514 6.20914 5.47871 5.07171 5.47871C3.93471 5.47871 3.01114 4.55514 3.01114 3.41814C3.01114 2.28071 3.93471 1.35714 5.07171 1.35714Z"
                fill="#bfbfbf"
            />
        </svg>
    );
};

export default DeleteIcon;
