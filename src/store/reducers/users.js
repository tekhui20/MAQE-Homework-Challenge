import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
  },
  reducers: {
    actionChangeUsers: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { actionChangeUsers } = usersSlice.actions;
export const usersData = (state) => state.users.data;

export default usersSlice.reducer;
