FROM node:carbon

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD node server/