import ImageComponent from '@components/ImageComponent';
import clsx from 'clsx';

interface IProps {
    title: string;
    desc?: string;
    src?: string;
    imageClass?: string;
    className?: string;
}

const BenefitCard = ({ title, desc, src, imageClass, className }: IProps) => {
    return (
        <div className={clsx(className ? className : '', 'flex h-16 items-center justify-center gap-1.5 rounded-md bg-bgDark p-3.5')}>
            {src && (
                <ImageComponent src={`/assets/images/landing/${src}.png`} fill figclassname={`${imageClass ? imageClass : 'h-8 w-8'} `} alt={title} />
            )}
            <div>
                <h3 className="text-sm font-extrabold uppercase">{title}</h3>
                <p className=" text-xs font-semibold uppercase text-white/50">{desc}</p>
            </div>
        </div>
    );
};

export default BenefitCard;
