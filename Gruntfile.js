module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            mainJS: {
                options: {
					almond:true,
                    baseUrl: "js/app",
                    wrap: true,
					paths:{
						"app":"config/Init"
					},
                    name: "../libs/almond",
                    preserveLicenseComments: false,
                    optimize: "uglify2",
                    mainConfigFile: "js/app/config/Init.js",
                    include: ["app"],
                    out: "js/app/app.min.js"
					
					/* simple require.js build
					baseUrl: "js/app/",
					mainConfigFile: "js/app/config/Init.js",
					name:"config/Init",
					out: "js/app/app.min.js"
					*/
                }
            }
        },
		watch: {
			compass: {
				files: ['sass/*.scss'],
				tasks: ['compass:dev'],
				options: {
                    spawn: false,
                    event: ["changed", "added", "deleted"],
					livereload: true
                }
			},
            jst: {
                files: ['js/app/templates/**/*.html'],
                tasks: ['jst:compile'],
                options: {
                    spawn: false,
                    event: ["changed", "added", "deleted"]
                }
            }
	  },
	   jst: {
            dev: {
                options: {
                    namespace: 'JST',
                    prettify: true,
					processName: function(filename) {
                        var end = filename.indexOf('.html'), //finish cutting before extension
							start = filename.lastIndexOf('/');  //begin to cut name starting from last slash in url
                        return filename.substring(start+1, end);  //jst method will have the same name as template has
                    },
                    processContent: function(src) {
                        return src.replace(/(^\s+|\s+$)/gm, ''); //trim spaces
                    }/*,
                    templateSettings: {
                        interpolate: /\{\{\=(.+?)\}\}/gim,
                        evaluate: /\{\{(.+?)\}\}/gim
                    }
					*/
                },
                files: {
                    "js/app/jst/templates.js": ["js/app/templates/*.html"]
                }
            },
			prod: {
                options: {
                    namespace: 'JST',
					processName: function(filename) {
                        var end = filename.indexOf('.html'), //finish cutting before extension
							start = filename.lastIndexOf('/');  //begin to cut name starting from last slash in url
                        return filename.substring(start+1, end);  //jst method will have the same name as template has
                    },
                    processContent: function(src) {
                        return src.replace(/(^\s+|\s+$)/gm, ''); //trim spaces
                    }
                },
                files: {
                    "js/app/jst/templates.js": ["js/app/templates/*.html"]
                }
            }
        },
		compass:{
			dev:{
				options:{
					//httpPath = "/",
					debugInfo:true,
					sassDir:'sass',
					cssDir:'css',
					imagesDir:'img',
					javascriptDir:'js',
					//fontsDir:'fonts',
					//specify:[],  only this file should be compiled
					//noLineComments:true, //remove debug lines
					//outputStyle:'compact', //compression type nested|expanded|compressed|compact
					force:true//, //allow to rewrite existing files
					//clean:true //clean cash
					//environment: 'production'
				}
			},
			prod:{
				options:{
					debugInfo:false,
					sassDir:'sass',
					cssDir:'css',
					noLineComments:false, //remove debug lines
					outputStyle:'compressed', //compression type nested|expanded|compressed|compact
					force:true//, //allow to rewrite existing files
				}
			}
		 }
    });
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jst');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	
    grunt.registerTask('compile_templates', ['jst']);
	grunt.registerTask('compile_compass',['compass']);
	grunt.registerTask('watch_compass',['watch:compass']);
    grunt.registerTask('build', ['jst:prod', 'requirejs:mainJS', 'compass:prod']); //jst templates must be compiled before requirejs
    grunt.registerTask('default', ['build']);

};