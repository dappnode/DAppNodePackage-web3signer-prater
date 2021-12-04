FROM node:16-alpine as builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.17.1-alpine

COPY --from=builder /usr/src/app/dist/ui /usr/share/nginx/html
EXPOSE 80
