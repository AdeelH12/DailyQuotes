FROM node:18 AS build
WORKDIR /app
COPY ../frontend ./frontend
WORKDIR /app/frontend
RUN npm install
RUN npm run build

FROM node:18
WORKDIR /app
COPY ./backend ./backend
COPY --from=build /app/frontend/build ./frontend/build
WORKDIR /app/backend
RUN npm install
EXPOSE 5000
CMD ["node", "server.js"]
