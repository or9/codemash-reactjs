var React = require("react");
var CommentList = require("./CommentList");
var CommentForm = require("./CommentForm");

module.exports = React.createClass({
	getInitialState: renderBoxInitialState,
	render: renderClass
});

function renderClass () {
	return (
		<div className="commentBox">
			<h1>Comments</h1>
			<CommentList data={ this.props.data } />
			<CommentForm />
		</div>
	);
}

function renderBoxInitialState () {
	return { data: [] };
}

