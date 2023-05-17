import React from 'react'
import { useCart } from 'react-use-cart';
function Shop() {
    const {items, totalUniqueItems,cartTotal}=useCart()
  return (
   
    <div className='container'>
       <h3>Shop</h3>
       <h3>Maxsulotlar soni:{totalUniqueItems}</h3>
       {
        items ?
        items.map((item)=>{
            return (
             <div key={item.name} className='row'>
                <div>
                <h2>{item.name}</h2>
                 <p>{item.price}</p>
                </div>
                
                 <img src={item.image} alt="" className='shop-img' />
             </div>
           )
        }) 
        :<h2>Maxsulot yoq</h2>
       }    
       <h2>Umumiy narx: {cartTotal}</h2>
    </div>
  )
}

export default Shop