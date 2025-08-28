# Mertcan Öncül Portfolio

Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Production Deployment

This project uses **CI/CD pipeline** for production deployment:

1. **GitHub Actions** builds the Docker image
2. **Docker Hub** stores the image
3. **Dokploy** deploys the image

### 🔧 Setup Requirements

#### GitHub Secrets
Add these secrets to your GitHub repository:

- `DOCKERHUB_USERNAME`: Your Docker Hub username
- `DOCKERHUB_TOKEN`: Your Docker Hub access token
- `DOKPLOY_APP_ID`: Your Dokploy application ID
- `DOKPLOY_API_KEY`: Your Dokploy API key
- `DOKPLOY_URL`: Your Dokploy instance URL

#### Docker Hub
1. Create a repository: `mertcanoncul0/mertcanoncul.com`
2. Generate access token in Docker Hub settings

#### Dokploy
1. Create application with type: `docker`
2. Set image: `mertcanoncul0/mertcanoncul.com:latest`
3. Configure port: `3000`
4. Set health check path: `/api/health`

### 📋 Deployment Flow

1. Push to `main` branch
2. GitHub Actions builds Docker image
3. Image pushed to Docker Hub
4. Dokploy automatically deploys new image
5. Health checks ensure zero-downtime deployment

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