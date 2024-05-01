import React, { useState } from 'react';

function Item({ name, category }) {
	const [inCart, setinCart] = useState(true);
	const [categoryClass, setCatClass] = useState(false);

	const cartAdd = () => {
		setinCart(!inCart);
		setCatClass(!categoryClass);
	};
	return (
		<li className={categoryClass ? 'in-cart' : ''}>
			<span>{name}</span>
			<span className='category'>{category}</span>
			<button onClick={cartAdd} className={categoryClass ? 'remove' : 'add'}>
				{inCart ? 'Add' : 'Remove from'} Cart
			</button>
		</li>
	);
}

export default Item;
