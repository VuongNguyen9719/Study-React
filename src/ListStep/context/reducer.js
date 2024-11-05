import { deepClone } from "../../utils";
import { ACTION_TYPE } from "./constants";

export default function Reducer(state, action) {
    const { payload, type } = action
    const newState = deepClone(state)
    switch (type) {
        case ACTION_TYPE.SET_STEP: {
            newState.stepActive = payload;
            return newState
        }
        case ACTION_TYPE.CHANGE_FORM_DATA: {
            newState.formState[payload.field] = payload.value;
            return newState;
        }
        case ACTION_TYPE.SUBMIT_FORM: {
            newState.originalFormState = deepClone(newState.formState);
            newState.isFormSaved = true
            return newState;
        }
        case ACTION_TYPE.SET_PREV_DATA_FORM: {
            newState.formState = deepClone(newState.originalFormState)
            return newState
        }
        default:
            return newState;
    }
}