import {IState} from "./usersReducer"

export const usersSelector = (state: IState): any => state.users.users
export const adminsSelector = (state: IState): any => state.users.admins