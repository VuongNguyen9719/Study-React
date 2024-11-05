import { deepClone } from "../../utils"

export const ACTION_TYPE = {
    SET_STEP: 'SET_STEP',
    CHANGE_FORM_DATA: 'CHANGE_FORM_DATA',
    SUBMIT_FORM: 'SUBMIT_FORM',
    SET_PREV_DATA_FORM: 'SET_PREV_DATA_FORM'
}

export const TYPE_STEP = {
    step1: 0,
    step2: 1,
    step3: 2,
    step4: 3,
}

const DefaultStateForm = {
    firstName: '',
    lastName: '',
    company: '',
    phoneNumber: '',
    website: '',
    trafic: '',
    email: '',
    isAgree: false
}

export const InitialState = {
    stepActive: TYPE_STEP.step1,
    isFormSaved: false,
    formState: DefaultStateForm,
    originalFormState: deepClone(DefaultStateForm)
}