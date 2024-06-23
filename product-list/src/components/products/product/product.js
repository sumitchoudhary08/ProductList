import {React, useEffect} from 'react';
import './product.css';

const ProductCard = ({name, imgSrc, price, currency, exchange}) =>{

return(
<div className="container">
    <div className='child'>
        <img  src={imgSrc} className='img' />
    </div>
    <div className='child'>
        <span>{name}</span> <br />
        <span>{currency != null ? currency.currency : "₹"} {Math.round(price * exchange)} </span>
    </div>
</div>
)
}

export default ProductCard;