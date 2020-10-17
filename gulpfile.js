const del = require("del");
const gulp = require("gulp");
const gulpIf = require("gulp-if");
const htmlmin = require("gulp-htmlmin");

const htmlminOpts = require("./.htmlminrc");

function clean() {
  return del("public");
}

function build() {
  return gulp
    .src("src/**/*")
    .pipe(gulpIf("*.html", htmlmin(htmlminOpts)))
    .pipe(gulp.dest("public"));
}

exports.default = gulp.series(clean, build);
