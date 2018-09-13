module.exports = function(grunt) {
    grunt.initConfig({
        assets_inline: {
            dist: {
                cssTags: {
                    start: "<style type='text/css'>"
                },
                files: {
                    "dist/resume.html": "resume.html",
                }
            }
        },
        html_pdf: {
            options: {
                format: "Letter"
            },
            dist: {
              files: {
                "generated/resume.pdf": "dist/resume.html"
              }
            }
        },
        watch: {
            scripts: {
                files: ["css/*.css", "*.html"],
                tasks: ["assets_inline"]
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks("grunt-assets-inline");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-html-pdf-2");

    /* default task */
    grunt.registerTask("default", ["assets_inline"]);

    /* generate pdf tsk */
    grunt.registerTask("generate", ["assets_inline", "html_pdf"]);
};