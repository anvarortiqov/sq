import React from 'react'
import {useCart} from 'react-use-cart'

function Card(props) {
  const {name, price,img,describe,category,product}=props
  const {addItem}=useCart()
  return (
    <div className='card'>
        <img src={img} alt="" className='card-img' />
        <div className="row">
             <h3 className="card-name">{name}</h3>
             <p className='card-price'>
               Narxi:{price}
             </p>
        </div>  
        <p className='card-text'>{describe}</p>
        <p>
            Bo'lim:{category}
        </p>
        <button 
          className='card-btn btn'
          onClick={()=>{addItem(product)}}
        >Order now</button>
    </div>
  )
}

export default Card