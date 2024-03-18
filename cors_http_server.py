from http.server import SimpleHTTPRequestHandler, HTTPServer
import os

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

if __name__ == '__main__':
    # Specify the directory to serve files from
    directory = './dist'
    os.chdir(directory)
    
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, CORSRequestHandler)
    print(f'Serving HTTP on 0.0.0.0 port 8000, serving files from {directory}...')
    httpd.serve_forever()
