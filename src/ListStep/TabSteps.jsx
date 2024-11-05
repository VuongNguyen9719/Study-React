import React from 'react'
import { twMerge } from 'tailwind-merge'
import { useGetActionListStep, useGetListStepContext } from './context/provider';


const TabSteps = () => {
    const { state, stepConfig, validateStep } = useGetListStepContext();
    const { handleSetStep } = useGetActionListStep();
    const { stepActive } = state;
    return (
        <div className='flex'>
            {
                stepConfig && stepConfig.length > 0 && stepConfig.map(({ label, value }) => {
                    const isActive = stepActive == value;
                    return (
                        <button
                            className={
                                twMerge(
                                    'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition-all',
                                    isActive && '!text-white !bg-blue-700'
                                )
                            }
                            key={value}
                            onClick={() => {
                                validateStep(() => {
                                    handleSetStep(value)
                                })
                            }}
                        >
                            {label}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default TabSteps