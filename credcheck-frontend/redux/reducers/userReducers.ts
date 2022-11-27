import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import userTypes from '../../models/user.types';

const initialState:userTypes = {
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    gender:"",
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,action:PayloadAction<userTypes>) => {
            console.log(action)
        }
    }
});

export const {
    addUser
} = userSlice.actions


export default userSlice.reducer
