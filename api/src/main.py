import falcon


class HelloWorldResource:
    def on_get(self, request, response):
        response.media = ('Hello World from Falcon API')

class BeefResource:
    def on_get(self, request, response):
        response.media = ('beef')
class UserResource:
    def on_get(self, request, response):
        response.media = ('user')

app = falcon.API()  
app.add_route('/', HelloWorldResource())
app.add_route('/beef', BeefResource())
app.add_route('/user', UserResource())