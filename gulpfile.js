var gulp = require("gulp");

gulp.task("copy", copyTask);
gulp.task("build", ["copy"], buildTask);
gulp.task("default", ["build"]);

function copyTask () {
	return gulp.src(["src/**", "css/**"], { base: "./" })
		.pipe(gulp.dest("dist/"));
}

function buildTask () {
	// return gulp.pipe();
}
