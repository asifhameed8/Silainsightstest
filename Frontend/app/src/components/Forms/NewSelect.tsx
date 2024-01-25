import { ReactNode, useState, useRef } from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import { Listbox } from '@headlessui/react';
import OutSideClick from 'react-outside-click-handler';
import { IoIosArrowDown } from 'react-icons/io';
import clsx from 'clsx';
import FormCheck from './FormCheck';
import EthIcon from '@components/_Icons/EthIcon';
import PolygonIcon from '@components/_Icons/PolygonIcon';

interface IData {
    icon?: ReactNode;
    name: string | number;
    key: string | number;
}

interface IProps {
    selected: IData | null | undefined;
    // eslint-disable-next-line no-unused-vars
    setSelected: (value: IData | null) => void;
    Data: IData[];
    iconClass?: string;
    placeholder?: string;
    dropStyle?: string;
    className?: string;
    InteractiveFilter?: boolean;
    ChainIcon?: boolean;
}

export default function NewSelect({
    Data,
    iconClass,
    placeholder,
    selected,
    setSelected,
    InteractiveFilter,
    dropStyle,
    className,
    ChainIcon
}: IProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    return (
        <OutSideClick
            onOutsideClick={() => {
                setIsOpen(false);
            }}
        >
            <Manager>
                <Listbox as="div" value={selected} onChange={setSelected}>
                    <Reference>
                        {({ ref }) => (
                            <Listbox.Button
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                }}
                                ref={(node) => {
                                    ref(node);
                                    if (node) buttonRef.current = node;
                                }}
                                className={`${className} relative flex w-full items-center justify-between rounded-md border border-lightBorder bg-white py-2 pl-3 pr-14 text-left text-sm focus:outline-none dark:border-borderColor dark:bg-bgDark`}
                            >
                                <div
                                    className={clsx(
                                        placeholder ? 'text-secondary' : 'text-black dark:text-white',
                                        `flex items-center gap-2 truncate`
                                    )}
                                    title={selected?.name || placeholder}
                                >
                                    {ChainIcon ? (
                                        selected?.name === 'ETH' ? (
                                            <EthIcon classNames="h-5 w-5" />
                                        ) : (
                                            <PolygonIcon classNames="h-5 w-5" />
                                        )
                                    ) : (
                                        ''
                                    )}
                                    {selected?.icon} {selected?.name || placeholder}
                                </div>
                                <span className="pointer-events-none absolute inset-y-1/2 right-2 flex items-center ">
                                    <i className={`${iconClass ? iconClass : ''} text-xl text-secondary`} aria-hidden="true">
                                        <IoIosArrowDown />
                                    </i>
                                </span>
                            </Listbox.Button>
                        )}
                    </Reference>
                    {isOpen && (
                        <Popper placement="bottom-start">
                            {({ ref, style, placement }) => (
                                <Listbox.Options
                                    ref={(node) => {
                                        ref(node);
                                        if (node) dropdownRef.current = node;
                                    }}
                                    style={style}
                                    data-placement={placement}
                                    className={`${dropStyle} AtScrollHide DropDownShadow relative z-10 mt-1 max-h-[20.5rem] w-[200px] overflow-auto rounded-md 
                                 border  border-lightBorder bg-white py-1 text-sm focus:outline-none dark:border-borderColor dark:bg-bgDark`}
                                >
                                    {Data.map((item: IData, Idx: number) => (
                                        <Listbox.Option
                                            key={item.name + 'aaa'}
                                            className={({ active }: { active: boolean }) =>
                                                `relative cursor-pointer select-none  py-1.5 px-3 ${
                                                    active ? 'bg-lightHover dark:bg-dark' : ''
                                                } first-letter:first-line:marker:
                                            ${Idx == Data.length - 1 ? '' : 'border-b border-lightBorder dark:border-borderColor'}
                                            `
                                            }
                                            value={item}
                                        >
                                            {InteractiveFilter ? (
                                                <div className="flex items-center justify-between gap-2 truncate  text-secondary dark:text-white">
                                                    {item.name}
                                                    <FormCheck label="" />
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 truncate  text-secondary dark:text-white">
                                                    {item.icon}
                                                    {item.name}
                                                </div>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            )}
                        </Popper>
                    )}
                </Listbox>
            </Manager>
        </OutSideClick>
    );
}
