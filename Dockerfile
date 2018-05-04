FROM node:carbon

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN mkdir -p /dist/client
EXPOSE 3000 35729
CMD npm run start2