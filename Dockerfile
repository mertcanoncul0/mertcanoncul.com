# 1. Build aşaması
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml* bun.lockb* ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# 2. Production aşaması
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Gerekli paketleri yükle
RUN apk add --no-cache curl

# Sadece gerekli dosyaları kopyala
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY start.sh ./

# Script'i çalıştırılabilir yap
RUN chmod +x start.sh

# Health check ekle
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

EXPOSE 3000

# Test script ile başlat
CMD ["./start.sh"]
