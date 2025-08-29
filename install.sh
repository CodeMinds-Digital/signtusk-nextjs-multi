#!/bin/bash

# SignTusk Installation Script
echo "🚀 Installing SignTusk dependencies..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Clean install
echo "🧹 Cleaning previous installations..."
rm -rf node_modules package-lock.json

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo "✅ Installation completed successfully!"
    echo ""
    echo "🎉 You can now run:"
    echo "   npm run dev    # Start development server"
    echo "   npm run build  # Build for production"
    echo "   npm run lint   # Check code quality"
    echo ""
    echo "🌐 Open http://localhost:3000 to view the app"
else
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi
