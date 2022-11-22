FROM node:18-buster

WORKDIR /app

COPY ./domain-service /app

RUN npm install && npm run build

EXPOSE 3000
EXPOSE 80

CMD ["npm", "run", "start:prod"]
