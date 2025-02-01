import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

// getting all products
export const getproduct = createAsyncThunk("product/get",async()=>{
    try {
        let result=axios.get("http://localhost:5000/product/");
        return result
    }
    catch (error) {
        console.log(error)
    }
}
)


// adding new product
export const addproduct = createAsyncThunk("product/add",async(newproduct)=>{
    try {
        let result=axios.post("http://localhost:5000/product/add", newproduct);
        return result
    }
    catch (error) {
        console.log(error)
    }
})


// deleting a product
export const deleteproduct = createAsyncThunk("product/delete",async(id)=>{
  try {
      let result=axios.delete(`http://localhost:5000/product/${id}`);
      return result
  }
  catch (error) {
      console.log(error)
  }
})

// editing a product
export const editproduct = createAsyncThunk("product/edit",async({id, edited})=>{
  try {
      let result=axios.put(`http://localhost:5000/product/${id}`, edited);
      return result
  }
  catch (error) {
      console.log(error)
  }
})

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [],
    status:null // statuts of the request (API) is it on pending? fullfilled? rejected?
  },
  reducers: {}
  ,
  extraReducers: (builder) => {
    builder
      // getting all products
      .addCase(getproduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getproduct.fulfilled, (state, action) => {
        state.status = "success";
        state.productList = action.payload.data.products;
      })
      .addCase(getproduct.rejected, (state) => {
        state.status = "fail";
      })

      // adding new product
      .addCase(addproduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addproduct.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addproduct.rejected, (state) => {
        state.status = "fail";
      })

      // deleting a product
      .addCase(deleteproduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteproduct.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deleteproduct.rejected, (state) => {
        state.status = "fail";
      })

      // editing a product
      .addCase(editproduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editproduct.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editproduct.rejected, (state) => {
        state.status = "fail";
      });
  },
})

// Action creators are generated for each case reducer function
export const {} = productSlice.actions

export default productSlice.reducer