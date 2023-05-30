import { configureStore} from "@reduxjs/toolkit";
import PluginStyle from "./reducers/index";

export const store = configureStore ({
    reducer:{
        PluginStyle
    }
})