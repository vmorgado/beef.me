define('pages', function (require) {
    return {
        dashboard: {
            template: `<div id="dashboard">
                            <div id="message"> 
                                message: {{message}} 
                            </div>
                            <div id="synced">
                                Texto em tempo real da db.
                                <h3 id="messageSynced">0</h3>
                            </div>
                       </div>`,
            data: function () {
                return data;
            },
            mounted: function () {
                var app = require('firebase-app');
                var messageSynced = document.getElementById("messageSynced");
                var dbRef = firebase.database().ref().child('text');
                dbRef.on('value', snap => messageSynced.innerText = snap.val());
                
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