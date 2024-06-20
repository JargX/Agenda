FROM node:18-alpine
WORKDIR /rivasjoelagenda/
COPY public/ /rivasjoelagenda/public
COPY src/ /rivasjoelagenda/src
COPY package.json /rivasjoelagenda/
RUN npm install