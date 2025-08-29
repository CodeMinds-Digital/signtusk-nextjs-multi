#!/bin/bash

# Build Test Script for SignTusk
echo "🚀 Testing SignTusk build process..."

# Check Node.js version
echo "📋 Node.js version: $(node -v)"
echo "📋 NPM version: $(npm -v)"

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out node_modules/.cache

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linting
echo "🔍 Running ESLint..."
npm run lint

# Type checking
echo "🔧 Type checking..."
npm run type-check

# Build the project
echo "🏗️ Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "🎉 Ready for deployment!"
else
    echo "❌ Build failed!"
    exit 1
fi
