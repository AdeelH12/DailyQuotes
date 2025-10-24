FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
COPY src ./src
COPY public ./public
RUN npm install
RUN npm run build

FROM node:18
WORKDIR /app
COPY ./backend ./backend
COPY --from=build /app/build ./build 
WORKDIR /app/backend
RUN npm install
EXPOSE 5000
CMD ["node", "server.js"]
