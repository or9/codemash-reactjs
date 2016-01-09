var React = require("react");
var ReactDOM = require("react-dom");
var marked = require("marked");

var mockData = [
	{ id: 1, author: "Super Auth", text: "This is one comment" },
	{ id: 2, author: "Michael Jordan", text: "Some other comment" }
];

var CommentList = React.createClass({
	render: renderCommentList
});

var CommentBox = React.createClass({
	render: renderCommentBox 
});

var Comment = React.createClass({
	render: renderComment,
	rawMarkup: rawmarkup
});

var CommentForm = React.createClass({
	render: renderCommentForm
});

ReactDOM.render(
	<h1>Hello again, world.</h1>,
	document.getElementById("example")
);

ReactDOM.render(
	<CommentBox data={ mockData } />,
	document.getElementById("content")
);


function rawmarkup () {
	var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
	return { __html: rawMarkup };
}

function renderCommentForm () {
	return (
		<div className="commentForm">
			It's a CommentForm!
		</div>
	);
}

function renderComment () {
	return (
		<div className="comment">

			<h2 className="commentAuthor">
				{ this.props.author }
			</h2>

			<span dangerouslySetInnerHTML={ this.rawMarkup() } />
			//{ marked(this.props.children.toString()) }

		</div>
	);
}


function renderCommentBox () {
	return (
		<div className="commentBox">
			<h1>Comments</h1>
			<CommentList data={ this.props.data } />
			<CommentForm />
		</div>
	);
}


function renderCommentList () {
	var commentNodes = this.props.data.map(mapCommentNodes);

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
