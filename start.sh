#!/bin/sh

echo "Starting application..."
echo "Current directory: $(pwd)"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "Port: $PORT"
echo "NODE_ENV: $NODE_ENV"

# Check if .next directory exists
if [ -d ".next" ]; then
    echo ".next directory found"
    ls -la .next/
else
    echo ".next directory not found!"
    exit 1
fi

# Check if package.json exists
if [ -f "package.json" ]; then
    echo "package.json found"
    cat package.json | grep -A 5 '"scripts"'
else
    echo "package.json not found!"
    exit 1
fi

echo "Starting with pnpm start..."
exec pnpm start
