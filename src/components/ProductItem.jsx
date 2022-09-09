import '@styles/ProductItem.scss';
import {bike} from '@images/bike';
import addToCart from  '@icons/bt_add_to_cart.svg';
import React, { useState } from 'react';

const ProductItem = () => {
	const [cart, setCart] = useState([]);
	const handleClick= () =>{
		setCart([]);
	}
	return (
		<div className="ProductItem">
			<img src={bike} alt="bike" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure onClick={handleClick}>
					<img src={addToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
