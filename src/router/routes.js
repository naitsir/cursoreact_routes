import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import ComponentePorDefecto from '../components/componentedefecto';
import ComponenteAyuda from '../components/componenteayuda';
import ComponenteVer from '../components/componentever';
import NotFoundPage from '../components/notfoundpage';

const Cabecera = () => {
	return (
		<header>
			<h3>enlaces</h3>
			<NavLink to="/" activeClassName="link" exact={true}>Inicio</NavLink>
			<NavLink to="/ayuda" activeClassName="link">Ayuda</NavLink>
		</header>
	);
}

const Rutas = () => {
	return (
		<BrowserRouter>
			<Cabecera/>
			<Switch>
				<Route path="/" component={ComponentePorDefecto} exact={true} />
				<Route path="/ayuda" component={ComponenteAyuda} />
				<Route path="/ver/:id" component={ComponenteVer} />
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default Rutas;