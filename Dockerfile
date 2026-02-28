# -------- Builder --------
FROM node:18-alpine AS builder

WORKDIR /app

# Install deps dulu biar cache optimal
COPY package.json package-lock.json* ./

RUN npm ci

# Copy source
COPY . .

# Build standalone
RUN npm run build


# -------- Runner --------
FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV NODE_OPTIONS="--max-old-space-size=256"

# Copy standalone output (INI KUNCI NYA)
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]