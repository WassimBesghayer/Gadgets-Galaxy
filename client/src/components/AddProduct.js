import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addproduct } from '../redux/productslice';



function AddProduct({ping, setping}) {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newproduct, setnewproduct] = useState({
    "title": "",
    "img":"",
    "description":"",
    "price":'',
    "category": ""
  })
  return (
    <div>

<>
      <Button className='click-button' id='add-btn' variant="primary" onClick={handleShow} style={{backgroundColor:"green", border: 'none'}}>
        Add Item
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Item to be added :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter text" onChange={(e)=>setnewproduct({...newproduct, title:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Insert image URL" onChange={(e)=>setnewproduct({...newproduct, image:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter text" onChange={(e)=>setnewproduct({...newproduct, description:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter number" onChange={(e)=>setnewproduct({...newproduct, price:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Select aria-label="Default select example" placeholder="Open this select menu" onChange={(e)=>setnewproduct({...newproduct, category:e.target.value})}>
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
          <Button variant="primary" onClick={()=>{dispatch(addproduct(newproduct));setping(!ping);handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    {/* <>
        <Button className='click-button' id='rm-btn' variant="primary" onClick={handleShow} style={{backgroundColor:"red", border: 'none'}}>
          Remove Item
        </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Item to be added :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Enter the ID code" />
      </Form.Group>
      </Form>
      </Modal.Body>
    </>   */}
      
   
      
    </div>
  )
}

export default AddProduct