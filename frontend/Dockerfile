FROM node:16.10.0-alpine

WORKDIR /app

EXPOSE 3000

COPY package-lock.json /app/
COPY package.json /app/

RUN  npm install --silent


COPY . ./

CMD ["npm", "start"]


