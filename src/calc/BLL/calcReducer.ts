const SET_RESULT = 'CALC/SET_RESULT'
const DEL_RESULT = 'CALC/DEL_RESULT'

interface IState {
    resultAll: number[],
    elementsButton: string[]
}

let initState: IState = {
    resultAll: [],
    elementsButton:
        ['CE', 'C', '<', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '+-', '0', '.', '=']
}

interface IAction {
    type: string,
    operationResult?: any,


}

const calcReducer = (state = initState, action: IAction) => {
    switch (action.type) {
        case SET_RESULT:
            return {
                ...state,
                resultAll: [...state.resultAll, action.operationResult]
            }
        case DEL_RESULT:
            return {
                ...state,
                resultAll: []
            }
        default:
            return {...state}
    }
}

export const setResult = (operationResult: any) => ({type: SET_RESULT, operationResult})
export const delResult = () => ({type: DEL_RESULT})


export default calcReducer
