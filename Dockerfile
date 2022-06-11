FROM node:lts-alpine3.16

ENV NODE_ENV=production

WORKDIR /app

COPY ./app /app

RUN npm install --omit=dev

CMD [ "node", "index.js" ]
