import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    usersList: []
}

const UsersList = createSlice({
    name:'users',
    initialState,
    reducers:{
        addUsersList(state, action){
            state.usersList = action.payload;
        },
        editUsersList(state, action){
            const editUsers = state.usersList.map((item, index)=>{
                if(index === action.payload.index){
                    item = action.payload
                }
                return item;
            })
            state.usersList = editUsers
        },

     }
})

export const {addUsersList, editUsersList} = UsersList.actions;
export default UsersList.reducer;