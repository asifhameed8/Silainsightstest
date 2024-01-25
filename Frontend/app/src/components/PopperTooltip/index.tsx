import { createPopper } from '@popperjs/core';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

interface IProps {
    children: React.ReactNode;
    classNames?: string;
    disable?: boolean;
    position?: 'left' | 'right' | 'top' | 'bottom';
    text: string | React.ReactNode;
}

const PopperTooltip = ({ children, classNames, position = 'top', disable = false, text }: IProps) => {
    const popcorn = useRef(null);
    const tooltip = useRef(null);

    useEffect(() => {
        createPopper(popcorn?.current, tooltip?.current, {
            placement: position,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 0]
                    }
                }
            ]
        });
    }, [popcorn, position]);
    return (
        <div className="group">
            <div ref={popcorn} aria-describedby="tooltip">
                {children}
            </div>
            <div
                id="tooltip"
                className={clsx(
                    classNames,
                    `invisible !z-40 whitespace-nowrap rounded px-2 py-0.5 font-display text-xs font-bold capitalize text-dark group-hover:visible ${
                        disable ? 'bg-secondary1' : 'bg-primary'
                    }`
                )}
                ref={tooltip}
                role="tooltip"
            >
                {text}
                <div
                    id="arrow"
                    className="invisible absolute h-2 w-2 bg-inherit before:invisible before:absolute before:h-2  before:w-2 before:rotate-45 before:bg-inherit before:content-[''] group-hover:before:visible"
                    data-popper-arrow
                ></div>
            </div>
        </div>
    );
};

export default PopperTooltip;
