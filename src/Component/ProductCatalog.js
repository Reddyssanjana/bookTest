import React, { useEffect, useState } from 'react'
import { ProductTile } from './ProductTile';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const ProductCatalog = () => {
    const [products, setProducts] = useState([]);
    const [searchBook, setsearchBook] = useState('');
    useEffect(() => {
        axios.get(`https://openlibrary.org/search.json?title=${searchBook}`)
            .then(r => {
                console.log(r.data.docs);
                setProducts(r.data.docs)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    const handleSubmit = async () => {
        await axios.get(`https://openlibrary.org/search.json?q=the+lord+of+the+rings`)
            .then(r => {
                setProducts(r.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    const renderTile = (current_item) => {
        return <ProductTile product={current_item}></ProductTile>;
    }
    const allProduct = () => {
        let tiles = [];
        for (let i = 0; i < products.length; i++) {
            const current_item = products[i];
            tiles.push(renderTile(current_item));
        }

        return tiles;
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Search Book</Form.Label>
                    <Form.Control value={searchBook} type="text" placeholder="Search Book" onChange={(e) => {
                        setsearchBook(e.target.value);
                    }} />
                </Form.Group>

                <button onClick={() => handleSubmit()} type="submit">
                    Submit
                </button>
            </Form>
             <Row xs={1} className="mt-1 g-4" md={4} >
                {allProduct()}
            </Row> 
        </>
    )
}

export default ProductCatalog