import React from 'react'
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editproduct } from '../redux/productslice';



function EditProduct({product, ping, setping}) {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, seteditedproduct] = useState({
    title:product.title,
    img:product.img,
    description:product.description,
    price:product.price,
    category:product.category
  })
  return (
    <div>

<>
      <Button className='click-button' id='add-btn' variant="primary" onClick={handleShow} style={{backgroundColor:"green", border: 'none'}}>
        Edit Item
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editing an Item :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder={product?.title} onChange={(e)=>seteditedproduct({...edited, title:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder={product?.image} onChange={(e)=>seteditedproduct({...edited, image:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder={product?.description} onChange={(e)=>seteditedproduct({...edited, description:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder={product?.price} onChange={(e)=>seteditedproduct({...edited, price:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Default select example" placeholder="Open this select menu" onChange={(e)=>seteditedproduct({...edited, category:e.target.value})}>
        <option value="Smart Phones">Smart Phones</option>
          <option value="Smart Watches">Smart Watches</option>
          <option value="Embedded Systems">Embedded Systems</option>
          <option value="Remote Controllers">Remote Controllers</option>
        </Form.Select>    
      </Form.Group>

      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor:"red"}}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(editproduct({id:product._id, edited}));setping(!ping);handleClose()}}>
           edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default EditProduct