FROM node:16-alpine
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY tsconfig.json .eslintrc.json ./

COPY public public/
COPY src src/
COPY scripts scripts/
COPY config config/

CMD ["yarn", "start"]
