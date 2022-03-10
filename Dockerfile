FROM node:17

RUN mkdir /app

WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY . /app

CMD ["npm", "run", "dev"]