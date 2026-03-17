# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built app and dependencies
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Set production environment
ENV NODE_ENV=production

# Listen on all interfaces
ENV HOST=0.0.0.0

# Default port (Coolify can override via PORT env var)
EXPOSE 3000

# Start the app
CMD ["node", "build"]
