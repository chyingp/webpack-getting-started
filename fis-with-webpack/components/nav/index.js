var React = require('react');

require('./nav.scss');

module.exports = React.createClass({
	render: function(){
		return (
			<ul className="nav">
				<li><a href="#/home">home</a></li>
				<li><a href="#/profile">profile</a></li>
				<li><a href="#/account">account</a></li>
			</ul>
			);
	}
});
