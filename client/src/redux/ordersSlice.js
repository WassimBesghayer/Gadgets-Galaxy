import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

// getting all orders
export const getorder = createAsyncThunk("order/get",async()=>{
    try {
        let result=axios.get("http://localhost:5000/order/");
        return result
    }
    catch (error) {
        console.log(error)
    }
}
)


// adding new order
export const addorder = createAsyncThunk("order/add",async(neworder)=>{
    try {
        let result=axios.post("http://localhost:5000/order/add", neworder);
        return result
    }
    catch (error) {
        console.log(error)
    }
})


// deleting a order
export const deleteorder = createAsyncThunk("order/delete",async(id)=>{
  try {
      let result=axios.delete(`http://localhost:5000/order/${id}`);
      return result
  }
  catch (error) {
      console.log(error)
  }
})

// editing a order
export const editorder = createAsyncThunk("order/edit",async({id, edited})=>{
  try {
      let result=axios.delete(`http://localhost:5000/order/${id}`, edited);
      return result
  }
  catch (error) {
      console.log(error)
  }
})

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orderList: [],
    status:null // statuts of the request (API) is it on pending? fullfilled? rejected?
  },
  reducers: {}
  ,
  extraReducers: (builder) => {
    builder
      // getting all orders
      .addCase(getorder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getorder.fulfilled, (state, action) => {
        state.status = "success";
        state.orderList = action.payload.data.orders;
      })
      .addCase(getorder.rejected, (state) => {
        state.status = "fail";
      })

      // adding new order
      .addCase(addorder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addorder.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(addorder.rejected, (state) => {
        state.status = "fail";
      })

      // deleting a order
      .addCase(deleteorder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteorder.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(deleteorder.rejected, (state) => {
        state.status = "fail";
      })

      // editing a order
      .addCase(editorder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editorder.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(editorder.rejected, (state) => {
        state.status = "fail";
      });
  },
})

// Action creators are generated for each case reducer function
export const {} = orderSlice.actions

export default orderSlice.reducer