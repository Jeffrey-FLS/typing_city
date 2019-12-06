
module.exports = function () {

    /* Directory Structure ---------------------------------------------------*/

    // Main Directories
    var app = './app/';
    var build = './build/';
    var server = './server/';

    // App Directory
    var aAssets = app + 'assets/';
    var aPages = app + 'pages/';
    var aServices = app + 'services/';
    var aRegions = app + 'regions/';
    var aSources = aRegions + 'sources/'; //TODO - This list should only be for the first set of directories within the app

    // Build Directory
    var bAssets = build + 'assets/';
    var bPages = build + 'pages/';
    var bScripts = build + 'scripts/';


    /* Working Path Structure ------------------------------------------------*/

    // Paths / Directories
    var path1 = aPages + 'directoryName/';
    var path2 = aPages + 'directoryName/';
    var path3 = aPages + 'directoryName/';


    /* Start of Config -------------------------------------------------------*/

    var config = {

        /**
         * File paths
         */

        // Main Singles
        app: app,
        build: build,
        server: server,

        // Singles with Path
        css: build + 'css/master.css',
        fonts: aAssets + 'fonts/**/*.*',
        images: aAssets + 'images/**/*.*',
        index: app + 'index.pug',
        scss: app + 'master.scss',

        bScripts: bScripts,

        // Nested
        alljs: [ // Vetting all js
            './*.js',
            './server/*.js'
        ],

        pug: {
            index: {
                src: app + '*.pug',
                base: app,
                watch: [
                    app + '*.pug',
                    aSources + '*.pug',
                    aSources + '**/*.pug'
                ],
                dest: build
            },
            path1: {
                src: path1 + '*.pug',
                base: path1,
                watch: [
                    path1 + '*.pug',
                    path1 + 'sections/**/pug/*.pug'
                ],
                dest: bPages
            },
            path2: {
                src: path2 + '*.pug',
                base: path2,
                watch: [
                    path2 + '*.pug',
                    path2 + 'sections/**/pug/*.pug'
                ],
                dest: bPages
            },
            path3: {
                src: path3 + '*.pug',
                base: path3,
                watch: [
                    path3 + '*.pug',
                    path3 + 'sections/**/pug/*.pug'
                ],
                dest: bPages
            }
        },

        scripts: {
            app: {
                src: app + 'app.js',
                base: app,
                watch: app + 'app.js',
                dest: ''
            },
            service: {
                src: app + 'services/*.js',
                base: app + 'services/',
                watch: app + 'services/*.js',
                dest: ''
            },
            path1: {
                src: path1 + 'scripts/*.js',
                base: path1 + 'scripts/',
                watch: path1 + 'scripts/*.js',
                dest: ''
            },
            path2: {
                src: path2 + 'scripts/*.js',
                base: path2 + 'scripts/',
                watch: path2 + 'scripts/*.js',
                dest: ''
            },
            path3: {
                src: path3 + 'scripts/*.js',
                base: path3 + 'scripts/',
                watch: path3 + 'scripts/*.js',
                dest: ''
            }
        },

        regions: [
            aSources + 'app/app-links.pug',
            aSources + 'app/app-scripts.pug',
            aSources + 'bower-lib/bower-lib.pug',
            aSources + 'bower-lib/bower-scripts.pug'
        ],

        /**
         * Files Under Watch
         */

        watchSCSS: [
            app + '*.scss',
            app + 'modules/*.scss',
            app + 'modules/**/*.scss',
            app + 'smacss/*.scss',
            app + 'smacss/**/*.scss',
            app + 'smacss/**/**/*.scss',
            aPages + '**/*.scss',
            aPages + '**/global/*.scss',
            aPages + '**/sections/*.scss',
            aPages + '**/sections/**/*.scss'
        ],

        /**
         * Bower and NPM locations
         */

        bower: {
            json: require('./bower.json'),
            directory: build + 'libs/',
            ignorePath: '../build'
        },

        /**
         * browser sync
         */
        browserReloadDelay: 1000,


        /**
         * This js is for wiredep, and currently not under use for it was printing root src location
         * on inject:js. Also discontinued using because all links will be erased after every refresh
         * or save on pug.
         */
        injectSrc: [
            './build/scripts/*.js',
            '!build/scripts/app.js'
        ],

        injectOptions: {
            ignorePath: '/build'
        },

        /**
         * Node settings
         */

        defaultPort: 5000,
        nodeServer: './server/server.js'
    };


    /**
     * Configs
     */

    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };

        return options;
    };

    return config;
};



