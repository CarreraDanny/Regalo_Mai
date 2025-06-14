#!/usr/bin/env python3
"""
Simple HTTP server for the romantic anniversary website
Serves static HTML, CSS, and JavaScript files
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom handler to serve files with proper MIME types"""
    
    def end_headers(self):
        # Add security headers
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'DENY')
        self.send_header('X-XSS-Protection', '1; mode=block')
        super().end_headers()

    def guess_type(self, path):
        """Override to ensure proper content types"""
        mimetype, encoding = super().guess_type(path)
        path_str = str(path)
        
        # Ensure proper MIME types for web files
        if path_str.endswith('.css'):
            return 'text/css'
        elif path_str.endswith('.js'):
            return 'application/javascript'
        elif path_str.endswith('.html'):
            return 'text/html'
        
        return mimetype

def main():
    """Start the web server"""
    # Configuration
    PORT = int(os.environ.get('PORT', 8080))
    HOST = '0.0.0.0'  # Listen on all interfaces for Replit
    
    # Change to the directory containing our files
    current_dir = Path(__file__).parent
    os.chdir(current_dir)
    
    # Create server
    with socketserver.TCPServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
        print(f"🌹 Servidor romántico iniciado en http://{HOST}:{PORT}")
        print(f"💕 Sirviendo archivos desde: {current_dir}")
        print("❤️  Presiona Ctrl+C para detener el servidor")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n💔 Servidor detenido")
            sys.exit(0)

if __name__ == "__main__":
    main()