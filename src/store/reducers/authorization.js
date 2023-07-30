import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    authorizationUser: [],
    userToken: ''
}

const UsersList = (createSlice({
    name: 'authorizationUser',
    initialState,
    reducers: {
        createUsers(state, action) {
            state.authorizationUser = [...state.authorizationUser, action.payload]
        },
        checkUsers(state, action) {
            const localUser = JSON.parse(localStorage.getItem('authorizationUser'))
            if (localUser) {
                state.authorizationUser = localUser
            }
        },

        checkToken(state, action) {
            state.userToken = action.payload
        }

    }
}))

export const {createUsers, checkUsers, checkToken} = UsersList.actions
export default UsersList.reducer;