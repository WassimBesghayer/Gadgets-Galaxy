import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { deleteorder } from '../redux/orderSlice';
import Button from 'react-bootstrap/Button';


function Orders({ping, setping}) {
  const orders=useSelector((state)=>state.order.orderList);
  const dispatch=useDispatch();
  console.log(orders)
  return (
    <div>
      <Table style={{fontSize:"14px", width:"50%"}}>
      <thead >
        <tr>
          <th>#</th>
          <th>User Full Name</th>
          <th>Product bought</th>
          <th>Product Price</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody  >
      {orders?.map((el)=><tr><td></td>
                              <td>{el.nameUser}</td>
                              <td>{el.nameProduct}</td>
                              <td>{el.price}</td>
                              <td>{el.date}</td>
                              <td>edit</td>
                              <td> <Button variant="primary" onClick={()=>{dispatch(deleteorder(el?._id)); setping(!ping)}}>x</Button></td>
                              </tr>)}
      
      </tbody>
    </Table>
    
    </div>
  )
}

export default Orders