var React = require("react");
var Comment = require("./Comment");

module.exports = React.createClass({
	render: render
});

function render () {
	var data = this.props.data || [];
	var commentNodes = data.map(mapCommentNodes);

	return (
		<div className="commentList">
			{ commentNodes }
		</div>
	);

	function mapCommentNodes (comment) {
		return (
			<Comment author={ comment.author } key={ comment.id }>
				{ comment.text }
			</Comment>
		);
	}
}
