#!/bin/bash

# Holy Spirit Home Website Launcher (Mac)
# Double-click this file to start the website

cd "$(dirname "$0")/dist"

echo ""
echo "======================================"
echo "   Holy Spirit Home Website"
echo "======================================"
echo ""
echo "Starting website server..."
echo ""
echo "Opening your browser in 3 seconds..."
echo ""
echo "To stop the server, close this window"
echo "or press Ctrl+C"
echo ""
echo "======================================"
echo ""

# Open browser after a short delay
(sleep 3 && open "http://localhost:8000") &

# Start the server
python3 -m http.server 8000
