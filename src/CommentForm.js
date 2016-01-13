var React = require("react");

module.exports = React.createClass({
	render: render,
	getInitialState: getInitialState,
	handleAuthorChange: handleAuthorChange,
	handleTextChange: handleTextChange,
	handleSubmit: handleSubmit
});

function render () {
	return (
		<form className="commentForm" onSubmit={ this.handleSubmit }>

			<input 
				type="text" 
				placeholder="Your name"
			       	value={ this.state.author } 
				onChange={ this.handleAuthorChange } />

			<input 
				type="text" 
				placeholder="Say something…"
			       	value={ this.state.text }
				onChange={ this.handleTextChange } />

			<input type="submit" value="Post" />

		</form>
	);
}

function handleSubmit (e) {
	e.preventDefault();
	var author = this.state.author.trim();
	var text = this.state.text.trim();
	if (!text || !author) {
		return;
	}

	this.props.onCommentSubmit({author: author, text: text});

	this.setState({ author: "", text: ""});
}

function getInitialState () {
	return { author: "", text: "" };
}

function handleAuthorChange (e) {
	this.setState({ author: e.target.value });
}

function handleTextChange (e) {
	this.setState({ text: e.target.value });
}
