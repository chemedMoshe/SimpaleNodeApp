FROM node:16-alpine

WORKDIR /app

COPY . /app/

RUN npm install

COPY  . .

EXPOSE 3000

CMD ["npm", "start"]
