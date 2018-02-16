define('pages', function (require) {
    return {
        dashboard: {
            template: `<div id="message"> 
                            message: {{message}} 
                        </div>`,
            data: function () {
                return data;
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