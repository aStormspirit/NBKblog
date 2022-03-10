# Install dependencies only when needed
FROM node:17-alpine3.14

WORKDIR /app

COPY package*.json /app/

RUN npm cache clear --force

RUN npm install -g next typescript @types/react @types/node

RUN npm install


COPY . /app

RUN npm run build

RUN ls -a

EXPOSE 3000

CMD ["npm", "run", "dev"]