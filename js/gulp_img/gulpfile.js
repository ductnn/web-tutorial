"use strict";

// gulp
const gulp = require( "gulp" );

// Image Generation
const responsive = require( "gulp-responsive" );
const imagemin = require( "gulp-imagemin" );

// Images
gulp.task( "img", () => {
    return gulp.src( "_img/posts/*.{png,jpg}" )
        .pipe( responsive( {
            "*": [ // For all the images in the posts folder
                {
                    width: 230,
                    rename: { suffix: "_placehold" }
                },
                { // thubmnail
                    width: 535,
                    rename: { suffix: "_thumb" }
                },
                { // thumbnail @2x
                    width: 535 * 2,
                    rename: { suffix: "_thumb@2x" }
                },
                {
                    width: 575,
                    rename: { suffix: "_xs" }
                },
                {
                    width: 767,
                    rename: { suffix: "_sm" }
                },
                {
                    width: 991,
                    rename: { suffix: "_md" }
                },
                {
                    width: 1999,
                    rename: { suffix: "_lg" }
                },
                { // max-width hero
                    width: 1920
                }
            ]
        },
        {
          quality: 70,
          progressive: true,
          withMetadata: false,
          errorOnEnlargement: false,
          errorOnUnusedConfig: false,
          silent: true
        } ) )
        .pipe( imagemin() )
        .pipe( gulp.dest( "assets/img/posts/" ) );
});

gulp.task("watch", () => {
    gulp.watch(["assets/img/posts/*"], ["img"]);
});
