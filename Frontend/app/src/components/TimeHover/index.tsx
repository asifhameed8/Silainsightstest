import { useState, useRef, useEffect } from 'react';
import moment from 'moment';

interface IProps {
    children: React.ReactNode;
    className?: string;
    time: Date | string;
}

const TimeHover = ({ children, className, time }: IProps) => {
    const [hovered, setHovered] = useState(false);
    const [position, setPosition] = useState('bottom');
    const hoverCardRef = useRef<HTMLDivElement>(null);

    const handleResize = () => {
        if (!hoverCardRef.current) return;
        const hoverCardHeight = hoverCardRef.current.clientHeight;
        const bottomSpace = window.innerHeight - hoverCardRef.current.getBoundingClientRect().top;
        if (bottomSpace < hoverCardHeight) {
            setPosition('top');
        } else {
            setPosition('bottom');
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        handleResize();
    }, [hovered]);

    return (
        <div className={`${className} relative`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div
                className={`hover-card absolute z-50 min-w-[8.5rem] rounded-md bg-primary p-1 ${hovered ? '' : 'hidden'} ${
                    position === 'bottom' ? 'top-full ' : 'bottom-full'
                }`}
                ref={hoverCardRef}
            >
                <h3 className="text-center text-xs font-semibold text-black">{moment(time).format('lll')}</h3>
            </div>
            {children}
        </div>
    );
};

export default TimeHover;
