import React from 'react';
import '../styles/Header.scss';

import IconMenu from '../icons/icon_menu.svg'
import Logo from '../logos/logo_yard_sale.svg'
import IconCart from '../icons/icon_shopping_cart.svg'


const Header = () => {
	return (
		<nav>
			<img src={IconMenu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={Logo} alt="logo" className="logo" id="header-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email">platzi@example.com</li>
					<li className="navbar-shopping-cart">
						<img src={IconCart} alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
