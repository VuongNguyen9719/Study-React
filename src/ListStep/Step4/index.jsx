import React from 'react'
import { useGetActionListStep, useGetStateListStep } from '../context/provider';

export default function Step4(props) {
    const { formState: { isAgree } } = useGetStateListStep();
    const { handleChangeFormValue } = useGetActionListStep();

    return (
        <div className="flex items-start">
            <div className="flex items-center h-5">
                <input
                    id="remember"
                    type="checkbox"
                    value={isAgree}
                    checked={isAgree}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                    onChange={(e) => {
                        handleChangeFormValue('isAgree', e.target.checked)
                    }}
                />
            </div>
            <label
                htmlFor="remember"
                className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">
                I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.
            </label>
        </div>
    )
}