import React from 'react';
import { useGetActionListStep, useGetStateListStep } from '../context/provider';

export default function Step2(props) {
    const { formState } = useGetStateListStep();
    const { handleChangeFormValue } = useGetActionListStep();

    const listFieldForm = [
        {
            label: 'Website URL',
            placeholder: 'flowbite.com',
            fieldName: 'website'
        },
        {
            label: 'Unique visitors (per month)',
            fieldName: 'trafic',
            type: 'number'
        },
    ]
    return (
        <div
            className="grid gap-6 md:grid-cols-2"
        >
            {
                listFieldForm?.map(({ label, placeholder, fieldName, pattern, type }, index) => {
                    return (
                        <div
                            key={index}
                        >
                            <label htmlFor={fieldName} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                            <input
                                type={type || 'text'}
                                id={fieldName}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder={placeholder}
                                value={formState[fieldName]}
                                onChange={(e) => {
                                    handleChangeFormValue(fieldName, e.target.value)
                                }}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}