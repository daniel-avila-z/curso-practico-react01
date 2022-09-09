import React from 'react';
import '@styles/OrderItem.scss';
import {bike} from '@images/bike';
import close from '@icons/icon_close.png';

const OrderItem = () => {
	return (
		<div className="OrderItem">
			<figure>
				<img src={bike} alt="bike" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
			<img src={close} alt="close" />
		</div>
	);
}

export default OrderItem;
