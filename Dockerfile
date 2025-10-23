FROM node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest
COPY ./build /usr/share/nginx/html
EXPOSE 80

