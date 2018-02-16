define('router', function (require) {
    var VueRouter = require('vuerouter');
    var pages = require('pages');
    var routes = [
        { path: '/dashboard', component: pages.dashboard }
    ];
    return new VueRouter({
        routes: routes
    });
});