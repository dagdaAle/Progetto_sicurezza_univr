import http.server
import socketserver

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/satan.bin':
            self.path = './satan.bin'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

Handler = MyHTTPRequestHandler

with socketserver.TCPServer(("192.168.1.100", 8080), Handler) as httpd:
    print("Server started at 192.168.1.100:8080")
    httpd.serve_forever()
