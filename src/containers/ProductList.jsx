import React, { useEffect, useState } from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() =>{
		
	}, [])

	return (
		<section className="main-container">
			<div className="ProductList">
				<ProductItem />
			</div>
		</section>
	);
}

export default ProductList;
