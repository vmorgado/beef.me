// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'app',
    shim : {
        "bootstrap" : { "deps" :['jquery'] },
        "vuerouter" : { "deps" :['vue'] }
    },
    paths: {
        vue: '../node_modules/vue/dist/vue',
        vuerouter: '../node_modules/vue-router/dist/vue-router',
        jquery: '../node_modules/jquery/dist/jquery',
        bootstrap: '../node_modules/bootstrap/dist/js/bootstrap'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.

var data;
require(['fake-data'], function(fakeData) {
    data = fakeData;
    requirejs(['jquery', 'bootstrap', 'vue', 'vuerouter','main'], 
    function(jQuery, bootstrap, Vue, VueRouter, app) {        
        jQuery(document).ready(function(event) {
            app.$mount('#app');
        });
    });
});