import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    img:null,
    color:''
}

const PluginStyle = createSlice ({
    name:'changeObject',
    initialState,
    reducers:{
        createImg(state, action){
            state.img = action.payload
            console.log(initialState.img)
        },

        createColor(state, action){
            state.color = action.payload
        }
    }
})

export const {createImg, createColor} = PluginStyle.actions
export default PluginStyle.reducer