import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    usersList: []
}

const UsersList = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsersList(state, action) {
            state.usersList = action.payload;
        },

        editUsersList(state, action) {
            const editUsers = state.usersList.map((item, index) => {
                if (index === action.payload.index) {
                    item = action.payload
                }
                return item;
            })
            state.usersList = editUsers
        },

        removeUserList(state, action) {
            state.usersList.forEach((itemDelete, index) => {
                if (action.payload === index) {
                    state.usersList.splice(index, 1);
                }
            })
        }
    }
})

export const {addUsersList, editUsersList, removeUserList} = UsersList.actions;
export default UsersList.reducer;