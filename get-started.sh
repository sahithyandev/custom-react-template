echo "Staring..."
echo "Installing parcel..."
yarn global add parcel
echo ""
echo "Installing dependencies..."
yarn add -D parcel-bundler typescript @types/react @types/react-dom sass
yarn add react react-dom