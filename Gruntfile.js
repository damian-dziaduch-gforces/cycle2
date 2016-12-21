/*global module*/
module.exports = function(grunt) {

"use strict";

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
        files: [ 'src/*.js' ],
        options: {
            browser: true,
            curly:   false,
            devel:   false,
            latedef: false,
            globals: {
                jQuery: true
            }
        }
    },

    uglify: {
        core: {
            options: {
                banner: '/* Plugin for Cycle2; Copyright (c) 2012-2016 M. Alsup, D. Dziaduch; v<%=pkg.version %> */\n'
            },
            files: {
                'build/core/jquery.cycle2.core.min.js': [ 'src/jquery.cycle2.core.js' ]
            }
        },

        plugins: {
            options: {
                banner: '/* Plugin for Cycle2; Copyright (c) 2012-2016 M. Alsup, , D. Dziaduch; v<%=pkg.version %> */\n'
            },
            files: {
                'build/core/jquery.cycle2.autoheight.min.js':  [ 'src/jquery.cycle2.autoheight.js' ],
                'build/core/jquery.cycle2.caption.min.js':     [ 'src/jquery.cycle2.caption.js' ],
                'build/core/jquery.cycle2.command.min.js':     [ 'src/jquery.cycle2.command.js' ],
                'build/core/jquery.cycle2.hash.min.js':        [ 'src/jquery.cycle2.hash.js' ],
                'build/core/jquery.cycle2.loader.min.js':      [ 'src/jquery.cycle2.loader.js' ],
                'build/core/jquery.cycle2.pager.min.js':       [ 'src/jquery.cycle2.pager.js' ],
                'build/core/jquery.cycle2.prevnext.min.js':    [ 'src/jquery.cycle2.prevnext.js' ],
                'build/core/jquery.cycle2.progressive.min.js': [ 'src/jquery.cycle2.progressive.js' ],
                'build/core/jquery.cycle2.tmpl.min.js':        [ 'src/jquery.cycle2.tmpl.js' ],

                'build/plugin/jquery.cycle2.caption2.min.js':    [ 'src/jquery.cycle2.caption2.js' ],
                'build/plugin/jquery.cycle2.carousel.min.js':    [ 'src/jquery.cycle2.carousel.js' ],
                'build/plugin/jquery.cycle2.center.min.js':      [ 'src/jquery.cycle2.center.js' ],
                'build/plugin/jquery.cycle2.flip.min.js':        [ 'src/jquery.cycle2.flip.js' ],
                'build/plugin/jquery.cycle2.ie-fade.min.js':     [ 'src/jquery.cycle2.ie-fade.js' ],
                'build/plugin/jquery.cycle2.scrollVert.min.js':  [ 'src/jquery.cycle2.scrollVert.js' ],
                'build/plugin/jquery.cycle2.shuffle.min.js':     [ 'src/jquery.cycle2.shuffle.js' ],
                'build/plugin/jquery.cycle2.swipe.min.js':       [ 'src/jquery.cycle2.swipe.js' ],
                'build/plugin/jquery.cycle2.tile.min.js':        [ 'src/jquery.cycle2.tile.js' ],
                'build/plugin/jquery.cycle2.video.min.js':       [ 'src/jquery.cycle2.video.js' ]
            }
        }
    },

    watch: {
        files: 'src/*.js',
        tasks: 'jshint uglify'
    }

});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', [ 'jshint', 'uglify' ]);

};
