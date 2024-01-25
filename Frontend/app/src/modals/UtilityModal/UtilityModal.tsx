import { useMutation } from '@apollo/client';
import { Button } from '@components/Button';
import Input from '@components/Forms/Input';
import InfoIcon from '@components/_Icons/InfoIcon';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { CREATE_UTILITY, GET_UTILITIES } from 'src/graphql/utilities';
import { CategorySchema } from 'src/schema/schema';

interface FormData {
    name: string;
}
const UtilityModal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: yupResolver(CategorySchema)
    });

    const [createUtility, { loading }] = useMutation(CREATE_UTILITY);

    const handleFormSubmit = async (data: FormData) => {
        try {
            /* eslint-disable */
            const { data: utilityDate } = await createUtility({
                variables: { input: data },
                refetchQueries: [GET_UTILITIES]
            });
        } catch (error) {
            toast.error(error?.message.includes('E11000 duplicate key error collection') ? 'This name already exists' : error?.message);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="flex justify-center ">
                    <label className="mb-1 flex items-center gap-1">
                        <span className="text-sm font-semibold text-black dark:text-white">Metaverse Name</span>
                        <InfoIcon />
                    </label>
                    <Input
                        placeholder="Travel, Food, Business"
                        size="sm"
                        className="text-black dark:text-white"
                        name="name"
                        register={register}
                        error={errors.name?.message}
                    />
                    {/* <Button>Add</Button> */}
                </div>
                <Button type="submit" isLoading={loading} disabled={loading}>
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default UtilityModal;
