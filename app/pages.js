define('pages', function (require) {
    var a = require('beef-component');
    return {
        dashboard: {
            template: `<div id="dashboard">
                            <beef-component></beef-component>
                            <div id="synced">
                                Texto em tempo real da db.
                                <h3>{{text}}</h3>
                            </div>
                       </div>`,
            data: function () {
                return data;
            },
            mounted: function () {
            },
            methods: {
                greet: function (event) {
                    data.message = "Hey";
                },
                changePage: function (pageId) {
                    console.log("loading : " + pageId);
                }
            }
        }
    };
});