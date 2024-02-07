import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '10'
}


const userSlice = createSlice({
    name: 'userId',
    initialState,
    reducers: {
        storeUserId: (state, action) => {
            return action.payload
        }
    }
})


export const { storeUserId } = userSlice.actions;
export default userSlice.reducer;