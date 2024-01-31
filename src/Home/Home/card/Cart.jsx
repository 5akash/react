import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtoDb } from '../utility/Utlity';
const Cart = ({ product }) => {
    const {name,price,picture,id }= product

    const handleAdd=(id)=>{
        addtoDb(id)
    }


    return (
        <div className='col-md-4 col-sm-6 mb-5 g-2 '>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       price : {price}
                    </Card.Text>
                    <Button  onClick={()=>handleAdd(id)} variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;