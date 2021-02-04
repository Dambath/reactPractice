import React, {useState} from 'react';
import Product from '../../components/product'
import Total from '../../components/product/total'

function Products() {

   const [products, setProducts] = useState([
       {
           name: 'apple',
           price: 200,
           number: 5
       },
       {
           name: 'banana',
           price: 250,
           number: 3
       },
       {
           name: 'onion',
           price: 150,
           number: 7
       }
   ])

   let removeProduct = i => {
       let array = [...products]
       array.splice(i, 1)
       setProducts([...array])
   }

   

   function totalSum(){
       let array = [...products]
       let totalPrice = 0
       for (let i = 0; i < array.length; i++) {
           totalPrice += array[i].number * array[i].price
       }
       return(totalPrice)
   }

   let productsItems = products.map((item, i) => <Product fullPrice={item.number * item.price} name={item.name} price={item.price} number={item.number} index={i} removeProduct={removeProduct} />)
   let totalPrice = (<Total totalSum={totalSum()}/>)

   return (
       <div>
           {productsItems}
           {totalPrice}
       </div>
   )
}

export default Products;