FROM node:10.15

RUN mkdir /app
WORKDIR /app

RUN chown node /app -R

COPY package.json package.json
RUN npm install
RUN npm add react-scripts -g
COPY . .
USER node

CMD npm start