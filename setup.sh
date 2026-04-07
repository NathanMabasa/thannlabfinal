#!/bin/bash
set -e

cd "C:\Users\nyiko\Downloads\Thannlab new"

# Create directory structure
mkdir -p app/services app/work app/about app/contact app/blog
mkdir -p src/components/layout src/components/sections src/components/ui src/components/common
mkdir -p public

# Install dependencies (if npm is available)
if command -v npm &> /dev/null; then
  npm install
fi

echo "Project structure created successfully!"
