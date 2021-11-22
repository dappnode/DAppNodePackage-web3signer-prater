FROM node:alpine as build-monorepo

WORKDIR /app
COPY package.json lerna.json ./
RUN yarn
COPY packages/frontend/package.json \
    packages/frontend/yarn.lock \
    packages/frontend/
COPY packages/backend/package.json \
    packages/backend/yarn.lock \
    packages/backend/

RUN yarn bootstrap --production

WORKDIR /app/packages/frontend
COPY packages/frontend .
RUN yarn build

WORKDIR /app/packages/backend
COPY packages/backend .
RUN yarn build

FROM node:alpine

WORKDIR /usr/src/app
COPY --from=build-monorepo /app/packages/frontend/build dist-frontend
COPY --from=build-monorepo /app/packages/frontend/node_modules dist-frontend/node_modules
COPY --from=build-monorepo /app/packages/backend/build dist-backend
COPY --from=build-monorepo /app/packages/backend/node_modules dist-backend/node_modules

CMD [ "node", "dist-backend/index" ]