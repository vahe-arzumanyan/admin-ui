import { configureStore} from "@reduxjs/toolkit";
import PluginStyle from "./reducers/plugin";
import Authorization from "./reducers/authorization";
import UsersList from  "./reducers/user";

export const store = configureStore ({
    reducer:{
        PluginStyle,
        Authorization,
        UsersList
    }
})

export default store;