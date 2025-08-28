# Tek stage Dockerfile
FROM node:20-alpine
WORKDIR /app

# Environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Gerekli paketleri yükle
RUN apk add --no-cache curl

# Package files'ları kopyala
COPY package.json pnpm-lock.yaml* bun.lockb* ./

# Dependencies yükle
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Source code'u kopyala
COPY . .

# Uygulamayı build et
RUN pnpm build

# Health check ekle
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

EXPOSE 3000

# Uygulamayı başlat
CMD ["pnpm", "start"]
