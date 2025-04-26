import {configureStore} from "@reduxjs/toolkit";//configure the stores
import userReducer from "./Slices/UserSlice";
import profileReducer from "./Slices/ProfileSlice";
export default configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer
    }
});