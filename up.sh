rm -r gateway-svc/web-app/build
cd web-app
npm run build
cp -r build ../gateway-svc/web-app/
docker compose up --build -d