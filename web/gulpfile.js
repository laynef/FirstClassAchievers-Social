'use strict';

var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss    = require('gulp-minify-css');
let rename = require('gulp-rename');

//CONFIG PATHS
var config = {
	pages  : './public/theme/pages',
	assets : './public/theme/assets',
	build:'./public/theme/compiled'
};

//TASKS

gulp.task('compile_sass', function() {
    return gulp
        .src(config.pages+'/scss/pages.scss')          
        .pipe(sass())                                       	
        .pipe(gulp.dest(config.pages+'/css/'))                 	
        .pipe(minifyCss({                                   	
            keepSpecialComments: 0                          	
        }))
        .pipe(rename({                                      	
            suffix: ".min"                                  	
        }))
        .pipe(gulp.dest(config.build));                	
});

gulp.task('default', [                                      	
    'compile_sass'                                     	                                                                   	
]);