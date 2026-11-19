FROM node:22-bookworm-slim
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci
COPY . .
RUN --mount=type=cache,target=/app/node_modules/.cache npm run build
ENV NODE_ENV=production
EXPOSE 1337
CMD ["npm", "start"]