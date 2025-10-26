FROM node:18-alpine as build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage production
FROM nginx:alpine
COPY --from=build /usr/src/app/build /var/www/ichwal_app
