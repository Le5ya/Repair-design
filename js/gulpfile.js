const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');


// Stfnic server
function bs() {
	serveSass();

	browserSync.init({
      server: {
      	baseDir: "./"
      } 
		});
	watch("./*.html").on('change', browserSync.reload);
	watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
	watch("./js/*.js").on('change', browserSync.reload);
  watch("").on('change', broserSync.reload);
};

    function serveSass() {
    return src("./sass/**/*.sass", "./sass/**/**.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

 {
  src('css/**/**.css')
  .pipe(cleanCSS({compatibility: 'ie&'}))
  .pipe(dest('dist/css'));
  done();
}

function buildJS(done) {
  src(['js/**.js', '!js/**.min.js'])
  .pipe(minify({ext:{
        min:'.js'
          }
    }))
  .pipe(dest('dist/js/'));
  done();
}


exports.serve = bs;
exports.build = series(buildCSS, buildJS);


