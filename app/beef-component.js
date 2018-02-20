define('beef-component', function (require) {
    var Vue = require('vue');

    return Vue.component('beef-component', {
        data: function (){
            return data;
        },
        created: function(){
            this.data = data;
        },
        template: `
        <div class="panel panel-default col-xs-12">
            <div class="panel-body">
                {{beefs.beef_one}}
            </div>
        </div>
        `
    });
});