import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const ProductTile = ({ product }) => {
    return (

        <Col>
            <Card style={{ height: 500 }}>
                 <Card.Img variant="top" style={{ height: 250 }} src={`https://covers.openlibrary.org/b/id/${product.cover_i}-L.jpg`} /> 
                <Card.Header>Publish Date : {product.publish_date && product.publish_date.length > 0 && product.publish_date[0]} </Card.Header>
                <Card.Body>
                    <Card.Title>{product.title} </Card.Title>
                    <Card.Text>
                    {product.author_name && product.author_name.length > 0 && product.author_name[0]}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>



                </Card.Footer>
            </Card>
        </Col>


    )
}
