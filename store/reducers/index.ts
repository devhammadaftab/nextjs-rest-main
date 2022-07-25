import { InitialStateType, ActionType } from 'interfaces'
import { ActionConstent } from 'constants/store';

const reducer = (state: InitialStateType, actions: ActionType) => {
    switch (actions.type) {
        case ActionConstent.SET_USERS:
            return {
                ...state,
                users: actions.payload
            }
        case ActionConstent.SET_SELECTED_USER:
            return {
                ...state,
                selectedUser: actions.payload
            }
        case ActionConstent.SET_SELECTED_FILM:
            return {
                ...state,
                selectedFilm: actions.payload
            }
        default:
            return state
    }
}

export default reducer