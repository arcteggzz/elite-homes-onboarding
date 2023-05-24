import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "Tega",
  userEmail: "arcteggzz@gmail.com",
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userName = action.payload.name;
      state.userEmail = action.payload.userEmail;
    },
    deleteUserName: (state) => {
      state.userName = "";
    },
  },
});

export const { setUser, deleteUserName } = UserSlice.actions;

export default UserSlice.reducer;
