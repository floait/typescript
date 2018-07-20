var gulp = require("gulp");
var ts = require("gulp-typescript");
// var tsProject = ts.createProject("tsconfig.json");
var browserify = require(browserify);
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var gutil = require("qulp-util");
var paths = {
    pages: ['src/*.html']
};




/*gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});*/
