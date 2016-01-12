var React = require("react");
var CommentList = require("./CommentList");
var CommentForm = require("./CommentForm");

module.exports = React.createClass({
	getInitialState: renderBoxInitialState,
	componentDidMount: componentDidMount,
	loadCommentsFromServer: loadCommentsFromServer,
	pollInterval: 2000,
	render: renderClass
});

function componentDidMount () {
	this.loadCommentsFromServer();
	setInterval(this.loadCommentsFromServer, this.props.pollInterval);
}

function loadCommentsFromServer () {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", this.props.url, true);
	xhr.onload = dataLoaded.bind(this);
	xhr.onerror = dataLoadError.bind(this);
	xhr.send();
}

function dataLoaded (xhr) {
	var data = JSON.parse(xhr.target.responseText);
	this.setState({data: data});
}

function dataLoadError (xhr) {
	console.error(this.props.url, xhr.status, xhr.response);
}

function renderClass () {
	return (
		<div className="commentBox">
			<h1>Comments</h1>

			<CommentList 
				data={ this.state.data } />

			<CommentForm />
		</div>
	);
}

function renderBoxInitialState () {
	return { data: [] };
}

