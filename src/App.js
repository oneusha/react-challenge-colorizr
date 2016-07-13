import React, { Component } from 'react';
import { Link } from 'react-router';
import './styles/main.scss';

export default class App extends Component {
	render() {
	 	return (
	 		<div>
				<header className="header">
					<div className="container">
				  	<Link to="/"><img src="/images/logo-dark.svg" alt="Colorizr" width="200" /></Link>
				  	<nav className="menu">
				  		<ul role="nav">
				  			<li className="menu__item">
				  				<Link className="menu__link" activeClassName="menu__link--active" to="/create">Create</Link>
				  			</li>
				  			<li className="menu__item">
				  				<Link className="menu__link" activeClassName="menu__link--active" to="/explore">Explore</Link>
				  			</li>
				  			<li className="menu__item">
				  				<Link className="menu__link" activeClassName="menu__link--active" to="/presets">Presets</Link>
				  			</li>
				  			<li className="menu__item">
				  				<Link className="menu__link" activeClassName="menu__link--active" to="/export">Export</Link>
				  			</li>
				  		</ul>
				  	</nav>
				  </div>
				</header>

				{this.props.children}

				<footer className="footer">
					<div className="container">
						by Zhelnov Ivan
					</div>
				</footer>
			</div>);
	}
}