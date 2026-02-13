# 1. Base Image

FROM node:18-alpine AS builder

# 2. Set working directory inside container

WORKDIR /app

# 3. Copy package files first

COPY package*.json ./

# 4. Install dependencies (not dev dependencies)

RUN npm install --production 

# 5. Copy rest of the source code 

COPY . .

## Stage 2 : Multi-Stage 

FROM node:18-alpine

WORKDIR /app

# Copy only required files from builder

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
COPY --from=builder /app/package.json ./package.json

# 6. Expose app port

EXPOSE 5000

# 7. Start the server

CMD [ "node", "src/server.js" ]