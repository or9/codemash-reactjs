var gulp = require("gulp");
var exec = require("child_process").exec;

gulp.task("copyHtml", copyHtmlTask);
gulp.task("copy", copyTask);
gulp.task("build", ["copy", "copyHtml"], buildTask);
gulp.task("watch", watchTask);
gulp.task("default", ["build"]);

function copyHtmlTask () {
	return gulp.src("src/index.html")
		.pipe(gulp.dest("dist/"));
}

function copyTask () {
	return gulp.src(["css/**", "api/**/*.json"], { base: "./" })
		.pipe(gulp.dest("dist/"));
}

function watchTask () {
	gulp.watch(["src/**/*", "css/**/*"], buildTask);
}

function buildTask () {
	//exec("npm start", output);

	function output (err, stdout, stderr) {
		console.log(stdout);
	}
}
