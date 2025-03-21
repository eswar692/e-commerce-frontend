import { userDetails } from "@/utils/apiRoutes";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 export const fetchUser = createAsyncThunk<any, void, { rejectValue: string }>("user/fetchUser", async (_, thunkAPI) => {
    try {
      const response = await axios.get(userDetails, {withCredentials:true});
      const data = await response.data;
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue((error as any).message); 
    }
  });



  interface UserState {
    data: any | null;
    loading: boolean;
    error: any| null;
  }

  const initialState: UserState = {
    data: null,
    loading: false,
    error: null,
  };
  

  
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });

  export default userSlice.reducer;