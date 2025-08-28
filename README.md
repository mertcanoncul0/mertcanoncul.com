# Mertcan Öncül Portfolio

Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Production Deployment

This project uses **Dokploy** for automatic deployment:

1. **Push to main branch** → Dokploy automatically builds and deploys
2. **Docker build** → Happens on Dokploy server
3. **Auto-deploy** → Zero-downtime deployment with health checks

### 🔧 Dokploy Setup

1. **Create application** with type: `docker`
2. **Connect GitHub repository**
3. **Set port**: `3000`
4. **Configure health check**: `/api/health`
5. **Set resources**: 1Gi RAM, 1 CPU

### 📋 Deployment Flow

1. Push to `main` branch
2. Dokploy automatically detects changes
3. Builds Docker image on Dokploy server
4. Deploys new version with health checks
5. Rolls back if health check fails

### 🏥 Health Check

Health check endpoint: `/api/health`

Returns:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.45,
  "environment": "production",
  "port": 3000
}
```

## 🛠️ Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🐳 Docker

```bash
# Build image
docker build -t mertcanoncul.com .

# Run container
docker run -p 3000:3000 mertcanoncul.com

# Using docker-compose
docker-compose up
```

## 📱 Features

- 🌍 Internationalization (TR/EN)
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- 📝 MDX blog support
- 🖼️ Image gallery
- 🔒 Password protection for selected routes
- 🚀 Optimized for production