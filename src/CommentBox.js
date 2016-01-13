var React = require("react");
var CommentList = require("./CommentList");
var CommentForm = require("./CommentForm");

module.exports = React.createClass({
	getInitialState: renderBoxInitialState,
	componentDidMount: componentDidMount,
	loadCommentsFromServer: loadCommentsFromServer,
	pollInterval: 2000,
	render: renderClass,
	handleCommentSubmit: handleCommentSubmit
});

function handleCommentSubmit (comment) {
	// fake it
	var comments = this.state.data;
	comment.id = new Date().getTime();
	var newComments = comments.concat([comment]);
	this.setState({ data: newComments });
	sessionStorage.setItem("comments.json", JSON.stringify(newComments));
}

function componentDidMount () {
	this.loadCommentsFromServer();
	setInterval(this.loadCommentsFromServer, this.props.pollInterval);
}

function loadCommentsFromServer () {
	var sessionData = sessionStorage.getItem("comments.json");
	if (sessionData) {
		sessionData = JSON.parse(sessionData);
		return this.setState({ data: sessionData });
	}

	var xhr = new XMLHttpRequest();
	xhr.open("GET", this.props.url, true);
	xhr.onload = dataLoaded.bind(this);
	xhr.onerror = dataLoadError.bind(this);
	xhr.send();
}

function dataLoaded (xhr) {
	var data = JSON.parse(xhr.target.responseText);
	sessionStorage.setItem("comments.json", xhr.target.responseText);
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

			<CommentForm onCommentSubmit={ this.handleCommentSubmit } />
		</div>
	);
}

function renderBoxInitialState () {
	return { data: [] };
}

