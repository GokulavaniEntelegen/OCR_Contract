# 1. Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy root package files for dependency install
COPY package.json package-lock.json ./
COPY common/package.json common/
COPY client/package.json client/
COPY server/package.json server/

# Copy shared tsconfig
COPY tsconfig.json .

# Copy all source code
COPY common ./common
COPY client ./client
COPY server ./server

# Install all dependencies (workspaces)
RUN npm install

# Build common, server, and client
RUN npm run build --workspace=common
RUN npm run build --workspace=server
RUN npm run build --workspace=client

# 2. Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Copy server build output & package.json to production image
COPY --from=builder /app/server/dist ./server/dist
COPY --from=builder /app/server/package.json ./server/package.json

# Copy common build output (if needed by server)
COPY --from=builder /app/common/dist ./common/dist

# Copy client build output (static files)
COPY --from=builder /app/client/dist ./client/dist

# Install only production dependencies for server
WORKDIR /app/server
RUN npm install --production

# Expose backend port (adjust if needed)
EXPOSE 4000

# Start the server
CMD ["node", "dist/index.js"]
