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
        bootstrap: '../node_modules/bootstrap/dist/js/bootstrap',
        firebase:'../node_modules/firebase/firebase'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
var data;
var database;
var firebaseApp;
require(['fake-data', 'firebase', 'firebase-app'], function(fakeData) {
    //fake data object for now
    data = fakeData;
    //init firebase stuff 
    firebaseApp = require('firebase-app');
    database = firebase.database();
    
    var beefRef = firebase.database().ref().child('text');
    beefRef.on('value', snap => data.text = snap.val());
    
    var beefRef = firebase.database().ref().child('beefs');
    beefRef.on('value', function (snap) {
        data.beefs = snap.val();
    });
    requirejs(['jquery', 'bootstrap', 'vue', 'vuerouter','main'], 
    function(jQuery, bootstrap, Vue, VueRouter, app) {        
        jQuery(document).ready(function(event) {
            app.$mount('#app');
        });
    });
});