var React = require("react");
var marked = require("marked");

module.exports = React.createClass({
	render: render,
	rawMarkup: rawmarkup
});

function render () {
	return (
		<div className="comment">

			<h2 className="commentAuthor">
				{ this.props.author }
			</h2>

			<span dangerouslySetInnerHTML={ this.rawMarkup() } />
			{ marked(this.props.children.toString()) }

		</div>
	);
}

function rawmarkup () {
	var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
	return { __html: rawMarkup };
}
