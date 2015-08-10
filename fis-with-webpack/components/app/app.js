require('./app.scss');

var React = require('react');
var Router = require('react-router'),
	Route = Router.Route,
	DefaultRoute = Router.DefaultRoute;

var Home = require('home'),
	// Profile = require('profile'),
	Profile = require("react-proxy?name=profile!profile"),
	Account = require('account'),
	Nav = require('nav');

var RouteHandler = Router.RouteHandler;

var routes = (
	<Route handler={App}>
		<DefaultRoute handler={Home}/>
		<Route name="home" path="home" handler={Home} />
		<Route name="profile" path="profile" handler={Profile}></Route>
		<Route name="account" path="account" handler={Account}></Route>
	</Route>
);

var App = React.createClass({
	render: function(){
		return (
			<div className="app">
				<RouteHandler />
			</div>
			);
	}
});

Router.run(routes, function(Handler){
	React.render(<Handler/>, document.getElementById('js-container'));
});