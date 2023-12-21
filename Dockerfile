FROM node:20.10-alpine
RUN mkdir /nodeserver
COPY package.json /nodeserver/
WORKDIR /nodeserver
COPY . ./

RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]