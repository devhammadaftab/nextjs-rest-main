import { ActionConstent } from "constants/store"
import { UserType } from "interfaces"

const setUsers = (users: UserType[]) => {
    return { type: ActionConstent.SET_USERS, payload: users }
}

const setSelectedUser = (user: UserType) => {
    return { type: ActionConstent.SET_SELECTED_USER, payload: user }
}

const setSelectedFilm = (film: UserType) => {
    return { type: ActionConstent.SET_SELECTED_FILM, payload: film }
}

export default {
    setUsers,
    setSelectedUser,
    setSelectedFilm
}