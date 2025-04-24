import {createSlice} from "@reduxjs/toolkit";
const jwtSlice =createSlice({
    name:"jwt",
    initialState:localStorage.getItem("token") || "",
    reducers:{
        setJwt:(state,action)=>           //set User on local storage .It Takes(type,payload) what the action is type increment decand payload we pass the object and change the state
        {
            localStorage.setItem("token",action.payload);
            state=action.payload;   //original component updated means state is updated
        return state;      
      
    },
        removeJwt:(state)=>{
        localStorage.removeItem("token");
         state="";
        return state;
        
    }
}
 });

 export const {setJwt,removeJwt}=jwtSlice.actions;
 export default jwtSlice.reducer;