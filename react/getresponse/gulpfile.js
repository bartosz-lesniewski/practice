const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const { parallel, series, src, dest, watch } = require("gulp");

const jsPath = "./src/**/*.js";
const cssPath = "./src/**/*.css";

function getHtml() {
	return src("./public/*.html").pipe(gulp.dest("./dist/"));
}

function getStyle() {
	return src(cssPath)
		.pipe(sourcemaps.init())
		.pipe(concat("all.css"))
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("./src/"));
}

function getImg() {
	return src("./src/img/*").pipe(imagemin()).pipe(gulp.dest("./dist/img"));
}

function getJs() {
	return src(jsPath)
		.pipe(sourcemaps.init())
		.pipe(concat("all.js"))
		.pipe(terser())
		.pipe(sourcemaps.write("."))
		.pipe(dest("./dist/js"));
}

function watchTask() {
	watch([scssPath, jsPath], { interval: 1000 }, parallel(getStyle, getJs));
}

exports.getJs = getJs;
exports.getHtml = getHtml;
exports.getStyle = getStyle;
exports.getImg = getImg;
exports.default = series(parallel(getHtml, getStyle, getImg, getJs), watchTask);
