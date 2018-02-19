define('main', function (require) {
    
    var Vue = require('vue');
    var VueRouter = require('vuerouter');
    Vue.use(VueRouter);
    
    var router = require('router');
    router.push('/dashboard');
    return new Vue({
        router: router,
        data: data,
        init: function () {
            console.log("init");
        },
        created: function () {
            console.log("created");
        },
        beforeCompile: function () {
            console.log("beforeCompile");
        },
        compiled: function () {
            console.log("compiled");
        },
        activate: function () {
            console.log("activate");
        },
        ready: function () {
            console.log("ready");
        },
        attached: function () {
            console.log("attached");
        },
        detached: function () {
            console.log("detached");
        },
        beforeDestroy: function () {
            console.log("beforeDestroy");
        },
        destroyed: function () {
            console.log("destroyed");
        }
    });
});