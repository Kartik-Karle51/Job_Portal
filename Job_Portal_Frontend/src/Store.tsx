import {configureStore} from "@reduxjs/toolkit";//configure the stores
import sortReducer from "../Slices/JwtSlice";
import jwtReducer from "./Slices/JwtSlice";
export default configureStore({
    reducer:{
       sort:sortReducer,
       jwt:jwtReducer
    }
});