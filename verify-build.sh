#!/bin/bash

if [ ! -f "dist/index.html" ]; then
    echo "Error: dist/index.html is missing!"
    exit 1
fi

echo "Build verification passed: dist/index.html exists"
exit 0 