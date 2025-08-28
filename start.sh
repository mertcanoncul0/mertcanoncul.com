#!/bin/sh

echo "Starting application..."
echo "Current directory: $(pwd)"
echo "Node version: $(node --version)"
echo "Port: $PORT"
echo "NODE_ENV: $NODE_ENV"

# Check if standalone server exists
if [ -f "server.js" ]; then
    echo "Standalone server.js found - starting with node server.js"
    exec node server.js
elif [ -d ".next" ]; then
    echo ".next directory found - starting with pnpm start"
    exec pnpm start
else
    echo "Neither server.js nor .next directory found!"
    echo "Files in current directory:"
    ls -la
    exit 1
fi
