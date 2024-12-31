FROM node:20.18.0 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

COPY tsconfig*.json ./

COPY src src

RUN npm ci

RUN npm run builder


FROM node:20.18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY tsconfig*.json ./

RUN npm install --production

COPY --from-builder /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["node", "/usr/src/app/dist/main.js"]