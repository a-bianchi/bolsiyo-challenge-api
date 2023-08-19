# FROM node:18-alpine3.16 as development
FROM node:18-alpine3.16 as development

WORKDIR /usr/src

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:18-alpine3.16 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src

COPY package.json yarn.lock ./

RUN yarn install --prod

COPY . .

COPY --from=development /usr/dist ./dist

CMD ["node", "dist/main"]