import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    img:null,
    color:'',
    isImage: false
}

const PluginStyle = createSlice ({
    name:'img',
    initialState,
    reducers:{
        createImg(state, action){
            state.img = action.payload
            console.log(action.payload)
        },
        createColor(state, action){
            state.color = action.payload
            console.log(action.payload)
        },
        setIsImage(state, actions){
         state.isImage = actions.payload
        }
    }
})

export const {createImg, createColor, setIsImage} = PluginStyle.actions
export default PluginStyle.reducer