FROM node:14.7-alpine3.12 as builder

ARG NODE_ENV
ARG BUILD_FLAG

WORKDIR /app/builder
COPY . .
RUN npm ci