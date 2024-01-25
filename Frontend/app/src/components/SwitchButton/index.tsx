import { Switch } from '@headlessui/react';
interface IProps {
    enable?: boolean;
    loading?: boolean;
    onChange?: (checked: boolean) => void;
    value?: string;
    parentClass?: string;
    childClass?: string;
    translateClass?: string;
    disabled?: boolean;
}
export default function SwitchButton({ enable, loading, onChange, value, parentClass, childClass, translateClass, disabled }: IProps) {
    return (
        <Switch
            value={value}
            checked={enable}
            disabled={disabled || loading || false}
            onChange={onChange}
            className={`${loading ? 'disabled:opacity-30' : enable ? 'bg-primary' : 'bg-secondary1 dark:bg-[#1C3B53]'}
            ${parentClass ? parentClass : ''}
          SwitchShadow relative inline-flex h-[18px] w-8 shrink-0 cursor-pointer items-center rounded-full
         duration-200 ease-in-out focus:outline-none`}
        >
            <span
                aria-hidden="true"
                className={`${enable ? (translateClass ? translateClass : 'translate-x-4') : 'translate-x-0'} ${
                    childClass ? childClass : ''
                } inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch>
    );
}
