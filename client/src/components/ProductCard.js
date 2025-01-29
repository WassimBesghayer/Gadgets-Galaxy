import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProductCard({product}) {
  return (
    <div className='productCard-div'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product?.img} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
          {product?.price}
        </Card.Text>
        <Button variant="primary">Buy it</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard