FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=80

EXPOSE ${PORT}

CMD ["npm", "run", "dev"]