import React from 'react';
import '../styles/ProductItem.scss';

import IconCart from '../icons/bt_add_to_cart.svg'
const imageUrl = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"


const ProductItem = () => {
	return (
		<div className="ProductItem">
			<img src={imageUrl} alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure>
					<img src={IconCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
