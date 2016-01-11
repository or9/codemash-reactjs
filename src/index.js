var React = require("react");
var ReactDOM = require("react-dom");
var CommentBox = require("./CommentBox");

var mockData = [
	{ id: 1, author: "Me Author", text: "This is one comment" },
	{ id: 2, author: "Anonymous", text: "Some other comment" }
];

ReactDOM.render(
	<h1>Hello again, world.</h1>,
	document.getElementById("example")
);

ReactDOM.render(
	<CommentBox data={ mockData } />,
	document.getElementById("content")
);

