'use strict';

const gulp = require('gulp');

const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const groupMediaQueries = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-cleancss');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-replace');
const del = require('del');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const imagemin = require('gulp-imagemin');
const nunjucks = require('gulp-nunjucks');
const nunjucksRender = require('gulp-nunjucks-render');


const paths =  {
  src: './src/',              // paths.src
  build: './build/'           // paths.build
};

function styles() {
  return gulp.src([paths.src + 'sass/app.sass']) //, paths.src + 'sass/style.css'
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass()) //     FOR CSS{ outputStyle: 'expanded' } { outputStyle: 'compressed' } 
    .pipe(groupMediaQueries())
    .pipe(postcss([
      autoprefixer({browsers: ['last 2 version']}),
    ]))
    .pipe(cleanCSS())  // зкоментити FOR CSS
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest(paths.build + 'css/'));
}

  function fonts() {
         return gulp.src('src/fonts/**/*')
          .pipe(gulp.dest(paths.build + 'fonts/'))
}

/*function svgSprite() {
  return gulp.src(paths.src + 'img/svg/*.svg')
    .pipe(svgmin(function (file) {
      return {
        plugins: [{
          cleanupIDs: {
            minify: false //turn to true 
          }
        }]
      }
    }))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite-svg.svg'))
    .pipe(gulp.dest(paths.build + 'img/'));
}*/

function scripts() {
  return gulp.src(paths.src + 'js/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest(paths.build + 'js/'))
}

function scriptsVendors() {
  return gulp.src([
      'src/libs/owl.carousel/owl.carousel.min.js',
      'src/libs/owl.carousel2.thumbs/dist/owl.carousel2.thumbs.min.js',
      'src/libs/fotorama/fotorama.js',
      'src/libs/selectize/js/standalone/selectize.min.js',
      'src/libs/equalHeights/equalheights.js',
      'src/libs/slick-carousel/slick/slick.min.js'
      //,
     // 'node_modules/svg4everybody/dist/svg4everybody.min.js'
    ])
    .pipe(concat('vendors.min.js'))
    .pipe(gulp.dest(paths.build + 'js/'))
}

function htmls() {

  return gulp.src(paths.src + 'templates/*.html')
    .pipe(plumber())
    .pipe(nunjucksRender({
      path: ['src/templates/'] // String or Array
    }))
    .pipe(gulp.dest(paths.build));


  // return gulp.src(paths.src + '*.html')
  //   .pipe(plumber())
  //   .pipe(replace(/\n\s*<!--DEV[\s\S]+?-->/gm, ''))
  //   .pipe(gulp.dest(paths.build));
}



function images() {
  return gulp.src(paths.src + 'img/**/*.{jpg,jpeg,png,gif,svg}')
   // .pipe(imagemin()) // если картинок будет много, то и времени будет уходить много
    .pipe(gulp.dest(paths.build + 'img/'));
}

function clean() {
  return del('build/')
}

function watch() {
  gulp.watch(paths.src + 'sass/**/*', styles);
  gulp.watch(paths.src + 'js/*.js', scripts);
  gulp.watch(paths.src + 'templates/**/*.html', htmls);
 // gulp.watch(paths.src + 'img/svg/*', svgSprite)
}

function serve() {
  browserSync.init({
    server: {
      baseDir: paths.build
    }
  });
  browserSync.watch(paths.build + '**/*.*', browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.scriptsVendors = scriptsVendors;
exports.htmls = htmls;
exports.images = images;
exports.fonts = fonts;
//exports.svgSprite = svgSprite;
exports.clean = clean;
exports.watch = watch;

gulp.task('build', gulp.series(
  clean,
  gulp.parallel(styles, fonts,
   // svgSprite, 
    scripts, scriptsVendors, htmls, images)
));

gulp.task('default', gulp.series(
  clean,
  gulp.parallel(styles, fonts,
 // svgSprite, 
  scripts, scriptsVendors, htmls, 
  images),
  gulp.parallel(watch, serve)
));


// gulp.task('default', function () {


//   return gulp.src('src/templates/*.html')
//     .pipe(nunjucksRender({
//       path: ['src/templates/'] // String or Array
//     }))
//     .pipe(gulp.dest('build'));


// });
