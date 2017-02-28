module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  
  grunt.initConfig({
    clean: {
      src: ["./js/forge.bundle.js", "./js/forge.min.js"]
    },
    
    browserify: {
      forge: {
        src: "./js/forge.js",
        dest: "./js/forge.bundle.js",
        browserifyOptions: {
          standalone: "forge"
        }
      }
    },
    
    uglify: {
      forge: {
        src: "./js/forge.bundle.js",
        dest: "./js/forge.min.js"
      }
    }
  });
  
  // setup nodejs
  // grunt.registerTask("nodejs", ["mochaTest:nodejs"]);
  
  // setup browser
  // grunt.registerTask("browser", ["karma:test"]);
  grunt.registerTask("bundle", ["browserify:forge"]);
  grunt.registerTask("minify", ["browserify:forge", "uglify:forge"])

  // default is nodejs (eventually)
  // grunt.registerTask("default", "nodejs");
  
}
