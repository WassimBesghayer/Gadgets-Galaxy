import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";


export const getproduct = createAsyncThunk("product/get",async()=>{
    try {
        let result=axios.get("http://localhost:6000/product/");
        return result
    }
    catch (error) {
        console.log(error)
    }
}
)
export const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [],
    status:null // statuts of the request (API) is it on pending? fullfilled? rejected?
  },
  reducers: {
    extraReducers: (builder) => {
        builder
          .addCase(getproduct.pending, (state) => {
            state.status = "pending";
          })
          .addCase(getproduct.fulfilled, (state, action) => {
            state.status = "success";
            state.productList = action.payload.data.users;
          })
          .addCase(getproduct.rejected, (state) => {
            state.status = "fail";
          });
      },
  }
})

// Action creators are generated for each case reducer function
export const {} = productSlice.actions

export default productSlice.reducer