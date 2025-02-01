import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteproduct } from '../redux/productslice';
import { useDispatch } from 'react-redux';
import EditProduct from './EditProduct';
import { addorder } from '../redux/orderSlice';


function ProductCard({product, ping, setping}) {
  const dispatch=useDispatch();
  const [neworder, setneworder] = useState({
    
    nameUser:"user",
    nameProduct:product?.title,
    price:product?.price,
    date:new Date()
  })
  return (
    <div className='productCard-div'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product?.img} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
          <h3>{product?.price} TND</h3>
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addorder(neworder));setping(!ping)}}>Buy it</Button>
        <Button variant="primary" onClick={()=>{dispatch(deleteproduct(product?._id)); setping(!ping)}}>Delete it</Button>
        <EditProduct product={product} ping={ping} setping={setping}/>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard