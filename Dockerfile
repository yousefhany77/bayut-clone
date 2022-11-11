FROM node:16-alpine AS Base
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
# Copy the package.json and package-lock.json files
COPY package*.json ./
RUN npm ci


# Build the app
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=Base /app/node_modules ./node_modules
COPY . .
RUN npm run build
RUN rm -rf ./node_modules
RUN npm ci ---omit=dev --ignore-scripts

# RUN production
FROM node:16-alpine AS runner
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/package.json ./package.json
EXPOSE 8080
ENTRYPOINT  ["npm", "start"]