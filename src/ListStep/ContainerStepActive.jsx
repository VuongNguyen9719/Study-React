import React, { useMemo } from 'react';
import { useGetActionListStep, useGetListStepContext, useGetStateListStep } from './context/provider';

import { twMerge } from 'tailwind-merge';
import { TYPE_STEP } from './context/constants';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { deepEqualObject } from '../utils';

export default function ContainerStepActive() {
    const { validateStep, stepConfig } = useGetListStepContext();
    const { stepActive, formState, originalFormState } = useGetStateListStep();
    const { handleSetStep, handleSubmit } = useGetActionListStep();

    const isDisableBtnBack = stepActive == 0,
        isDisableBtnNext = stepActive == stepConfig.length - 1;

    const handleBack = () => {
        validateStep(() => {
            handleSetStep(stepActive - 1)
        })
    }

    const handleNext = () => {
        validateStep(() => {
            handleSetStep(stepActive + 1)
        })
    }


    const ListComponentWithStep = {
        [TYPE_STEP.step1]: Step1,
        [TYPE_STEP.step2]: Step2,
        [TYPE_STEP.step3]: Step3,
        [TYPE_STEP.step4]: Step4,
    }

    const ComponentWithStep = ListComponentWithStep[stepActive]
    const isChangeState = useMemo(() => {
        return deepEqualObject(formState, originalFormState)
    }, [formState, originalFormState])

    return (
        <div className='flex flex-col gap-4'>
            {
                ComponentWithStep &&
                <div className='p-4 border border-gray-300 border-solid rounded-lg min-h-[200px]'>
                    <ComponentWithStep />
                </div>
            }
            <div className='flex'>
                <button
                    type="button"
                    onClick={handleBack}
                    className={
                        twMerge(
                            "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition-all",
                            isDisableBtnBack && 'opacity-30 pointer-events-none'
                        )
                    }
                >
                    Back
                </button>

                <button
                    onClick={handleNext}
                    type="button"
                    className={
                        twMerge(
                            "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition-all",
                            isDisableBtnNext && 'opacity-30 pointer-events-none'
                        )
                    }
                >
                    Next
                </button>


                <button
                    type="button"
                    className={
                        twMerge(
                            "text-white ml-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all",
                            isChangeState && 'opacity-30 pointer-events-none'
                        )
                    }
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}
