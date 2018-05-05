FROM node:carbon

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000 35729
CMD npm run start:prod