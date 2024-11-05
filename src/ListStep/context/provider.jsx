import React, { createContext, useCallback, useContext, useReducer } from 'react';
import { ACTION_TYPE, InitialState } from './constants';
import Reducer from './reducer';
import { TYPE_STEP } from "./constants";
import { deepEqualObject, pickObject } from '../../utils';

const ListStepContext = createContext();


export default function ProviderListStep({
    children
}) {

    const [state, dispatch] = useReducer(Reducer, InitialState);
    const { formState, originalFormState } = state;

    const fnCheckValidate = (listFieldCheck) => {
        let result = deepEqualObject(pickObject(formState, listFieldCheck), pickObject(originalFormState, listFieldCheck));
        if (!result) {
            if (confirm("Confirm!") == true) {
                result = true
                dispatch({
                    type: ACTION_TYPE.SET_PREV_DATA_FORM,
                });
            }
        }
        return result;
    }

    const stepConfig = [
        {
            value: TYPE_STEP.step1,
            label: 'Step 1',
            validate: () => {
                return fnCheckValidate(['firstName', 'lastName', 'company', 'phoneNumber'])
            },
        },
        {
            value: TYPE_STEP.step2,
            label: 'Step 2',
            validate: () => {
                return fnCheckValidate(['website', 'trafic'])
            },
        },
        {
            value: TYPE_STEP.step3,
            label: 'Step 3',
            validate: () => {
                return fnCheckValidate(['email'])
            },
        },
        {
            value: TYPE_STEP.step4,
            label: 'Step 4',
            validate: () => {
                return fnCheckValidate(['isAgree'])
            },
        },
    ]

    const validateStep = (callback) => {
        let isValid = !state.isFormSaved ? true : stepConfig?.at(state.stepActive)?.validate();
        if (!isValid) {
            return
        }
        typeof callback == 'function' && callback();
    }

    const getValueContext = useCallback(() => {
        return {
            state,
            dispatch,
            validateStep,
            stepConfig
        }
    }, [state, dispatch, validateStep, stepConfig])

    return (
        <ListStepContext.Provider
            value={getValueContext()}
        >
            {children}
        </ListStepContext.Provider>
    )
}

export const useGetListStepContext = () => {
    const context = useContext(ListStepContext);
    if (!context) {
        throw new Error('useGetListStepContext must be used within a ProviderListStep');
    }

    return context
}

export const useGetStateListStep = () => {
    return useGetListStepContext()?.state;
}

export const useGetActionListStep = () => {
    const dispatch = useGetListStepContext()?.dispatch

    return {
        handleSetStep: (newStep) => {
            dispatch({
                type: ACTION_TYPE.SET_STEP,
                payload: newStep
            });
        },
        handleChangeFormValue: (field, value) => {
            dispatch({
                type: ACTION_TYPE.CHANGE_FORM_DATA,
                payload: {
                    field, value
                }
            });
        },
        handleSubmit: () => {
            dispatch({
                type: ACTION_TYPE.SUBMIT_FORM,
            });
        }
    }
}