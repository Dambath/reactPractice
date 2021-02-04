import React, {useState} from 'react';
import '../styles/product.css'

function Product(props) {

    return(
        <div>
            <table key={props.i}>
                <tr><th>Name of product</th><th>price</th><th>number</th><th>full price</th></tr>
                <tr><td>{props.name}</td><td>{props.price}</td><td>{props.number}</td><td>{props.fullPrice}</td><td><button onClick={() => props.removeProduct(props.index)}>delete</button></td></tr>
            </table>
        </div>
    )
}
export default Product; 