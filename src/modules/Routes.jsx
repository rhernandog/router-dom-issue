import React from "react";
import {BrowserRouter as Router, Route, NavLink, Link} from 'react-router-dom';


// home
const Home = ()=>(
	<div className="container">
		<div className="row">
			<div className="col-sm-12">
				<h2 className="text-center">THIS IS THE HOME COMPONENT</h2>
			</div>
		</div>
	</div>
);


// services
const Services = ()=>(
	<div className="container">
		<div className="row">
			<div className="col-sm-6 col-sm-offset-3">
				<h3 className="text-center">SERVICES COMPONENT</h3>

				<div className="panel panel-primary">
					<div className="panel-heading">Panel heading without title</div>
					<div className="panel-body">
						Panel content
					</div>
					<div className="panel-footer">Panel footer</div>
				</div>

			</div>
		</div>
	</div>
);

// contact
const Contact = ()=>(
	<div className="container">
		<div className="row">
			<div className="col-sm-6 col-offset-sm-3">
				<h3 className="text-center">CONTACT</h3>
				<form>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					</div>
					<div className="checkbox">
						<label>
							<input type="checkbox" /> Check me out
						</label>
					</div>
					<button type="submit" className="btn btn-default">Submit</button>
				</form>
			</div>
		</div>
	</div>
);


const Routes = ()=>(
	<Router>
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<NavLink className="btn btn-primary" to="/">Home</NavLink>&nbsp;
					<NavLink className="btn btn-primary" to="/services">Services</NavLink>&nbsp;
					<NavLink className="btn btn-primary" to="/contact">Contact</NavLink>
					<hr/>
				</div>

				<div className="col-sm-12">
					<Route path="/" component={Home} />
					<Route path="/services" component={Services} />
					<Route path="/contact" component={Contact} />
				</div>

			</div>
		</div>
	</Router>
);


export default Routes;
